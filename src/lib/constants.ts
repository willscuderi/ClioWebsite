export const SITE = {
  name: "Clio",
  tagline: "Every meeting, perfectly captured.",
  description:
    "AI-powered meeting transcription and notes that run locally on your Mac. Free, open source, and private by design.",
  url: "https://clionotes.com",
  github: "https://github.com/willscuderi/ClioNoteTakingApp",
  download:
    "https://github.com/willscuderi/ClioNoteTakingApp/releases/latest",
  iosGithub: "https://github.com/willscuderi/ClioiOS",
};

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const FEATURES = [
  {
    icon: "Cpu",
    title: "Local Transcription",
    description:
      "Run whisper.cpp directly on your Mac with GPU acceleration. No internet required.",
  },
  {
    icon: "AudioLines",
    title: "System + Mic Capture",
    description:
      "Record both sides of any call. Captures system audio and your microphone simultaneously.",
  },
  {
    icon: "Sparkles",
    title: "AI Summaries",
    description:
      "Generate smart summaries, action items, and key decisions using OpenAI, Claude, or Gemini.",
  },
  {
    icon: "Radio",
    title: "Smart Meeting Detection",
    description:
      "Automatically detects when meetings start and begin recording. Retroactive capture included.",
  },
  {
    icon: "Timer",
    title: "Retroactive Recording",
    description:
      "Forgot to hit record? Clio keeps a rolling buffer so you can capture what already happened.",
  },
  {
    icon: "Users",
    title: "Speaker Diarization",
    description:
      "Identify who said what with automatic speaker labeling via AssemblyAI or local models.",
  },
  {
    icon: "FileOutput",
    title: "Flexible Export",
    description:
      "Export to Apple Notes, Notion, Markdown, or plain text. Share however you work.",
  },
  {
    icon: "Globe",
    title: "Multi-Language",
    description:
      "Supports 99+ languages through Whisper. Transcribe meetings in any language.",
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Start your meeting",
    description:
      "Click record or let Clio auto-detect. Works with Zoom, Teams, Meet, FaceTime, and more.",
    icon: "Play",
  },
  {
    number: "02",
    title: "Clio listens & transcribes",
    description:
      "Real-time transcription runs locally or via cloud. Every word captured with timestamps.",
    icon: "Headphones",
  },
  {
    number: "03",
    title: "Get AI-powered notes",
    description:
      "Instant summaries, action items, and searchable transcripts. All saved to your device.",
    icon: "FileText",
  },
];

export const MACOS_FEATURES = [
  "System audio + microphone capture",
  "Local whisper.cpp with Metal GPU acceleration",
  "Menu bar quick access & global hotkeys",
  "Smart meeting auto-detection",
  "Retroactive recording buffer",
  "Export to Apple Notes, Notion, Markdown",
];

export const IOS_FEATURES = [
  "Record in-person meetings",
  "Speakerphone call capture",
  "On-device transcription",
  "Action Button quick-start",
  "Widgets for recording control",
  "Seamless sync with Mac app",
];

export const PRIVACY_BADGES = [
  {
    icon: "Shield",
    title: "On-Device Processing",
    description: "Transcription runs locally using whisper.cpp. Your audio never leaves your Mac.",
  },
  {
    icon: "UserX",
    title: "No Account Required",
    description: "No sign-up, no tracking, no telemetry. Just download and use.",
  },
  {
    icon: "Code",
    title: "Open Source (GPL-3.0)",
    description: "Fully auditable code. See exactly what Clio does with your data.",
  },
];

export const PRICING_FEATURES = [
  "Unlimited recordings",
  "Local whisper.cpp transcription",
  "System + microphone capture",
  "AI summaries (BYO API key)",
  "Speaker diarization",
  "Export to Apple Notes, Notion, Markdown",
  "Retroactive recording",
  "Smart meeting detection",
  "Global hotkeys & menu bar",
  "Multi-language support (99+)",
];

export const COMPETITORS = [
  { name: "Granola", price: "$10/mo" },
  { name: "Otter.ai", price: "$17/mo" },
  { name: "Fireflies", price: "$19/mo" },
];

export const FAQ_ITEMS = [
  {
    question: "Is Clio really free?",
    answer:
      "Yes, completely. Clio is open-source under GPL-3.0. There are no subscriptions, no freemium tiers, and no hidden costs. You may need your own API keys for cloud transcription or AI summaries, but local transcription with whisper.cpp is entirely free.",
  },
  {
    question: "Does my data ever leave my Mac?",
    answer:
      "Not unless you choose to use cloud services. Local transcription with whisper.cpp runs entirely on your device. If you opt to use OpenAI Whisper, AssemblyAI, or AI summary providers, audio or text is sent to those services — but Clio itself has no servers, no accounts, and no telemetry.",
  },
  {
    question: "Which AI providers are supported?",
    answer:
      "For transcription: local whisper.cpp (free, offline), OpenAI Whisper API, and AssemblyAI. For AI summaries: OpenAI GPT, Anthropic Claude, Google Gemini, Grok, and local models via Ollama. Bring your own API keys.",
  },
  {
    question: "How does Clio record both sides of a call?",
    answer:
      "Clio uses macOS ScreenCaptureKit to capture system audio (the other person's voice) and simultaneously records your microphone. It works with Zoom, Teams, Google Meet, FaceTime, and any other audio app.",
  },
  {
    question: "What is retroactive recording?",
    answer:
      "Clio maintains a rolling audio buffer in the background. If you forget to press record, you can go back and capture audio that already happened. It's like a dashcam for your meetings.",
  },
  {
    question: "Does Clio integrate with my calendar?",
    answer:
      "Clio can detect meetings from your calendar to auto-start recording. It works with Apple Calendar and supports Google Calendar and Outlook through native macOS calendar sync.",
  },
  {
    question: "When is the iPhone app coming?",
    answer:
      "The iOS app is currently in development. It will support in-person meeting recording, speakerphone call capture, on-device transcription, and Action Button quick-start. Sign up for our newsletter to be notified at launch.",
  },
  {
    question: "Is Clio notarized by Apple?",
    answer:
      "The release builds are signed and notarized through Apple's Developer ID program, so macOS Gatekeeper will allow installation without security warnings.",
  },
];
