import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const CLIO_PRO_API_KEY = process.env.CLIO_PRO_API_KEY!;

// Rate limit: track requests per device token (in-memory, resets on cold start)
const rateLimits = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS_PER_HOUR = 20;

function checkRateLimit(token: string): boolean {
  const now = Date.now();
  const entry = rateLimits.get(token);

  if (!entry || now > entry.resetAt) {
    rateLimits.set(token, { count: 1, resetAt: now + 3600_000 });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_HOUR) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  // Authenticate
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ") || authHeader.split(" ")[1] !== CLIO_PRO_API_KEY) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Parse body
  let body: { transcript: string; systemPrompt?: string; deviceId?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!body.transcript || typeof body.transcript !== "string") {
    return new Response(JSON.stringify({ error: "Missing transcript" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Rate limit by device ID
  const deviceId = body.deviceId || "anonymous";
  if (!checkRateLimit(deviceId)) {
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Max 20 summaries per hour." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  // Truncate very long transcripts (Gemini Flash handles ~1M tokens but be reasonable)
  const transcript = body.transcript.slice(0, 100_000);

  const systemPrompt =
    body.systemPrompt ||
    `You are a professional meeting note-taker. Analyze this transcript and produce:

1. **Summary** — A concise overview of the meeting (3-5 sentences)
2. **Key Decisions** — Bullet list of decisions made
3. **Action Items** — Bullet list with owner if mentioned (e.g., "- [Owner] Task description")
4. **Discussion Points** — Key topics discussed with brief context

Be concise, factual, and use markdown formatting.`;

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContentStream([
      { text: systemPrompt },
      { text: `Here is the meeting transcript:\n\n${transcript}` },
    ]);

    // Stream the response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Gemini API error:", message);
    return new Response(
      JSON.stringify({ error: "Summary generation failed", detail: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
