"use client";

import { ClioLogo } from "@/components/ui/ClioLogo";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <ClioLogo size={20} className="text-blue-500" />
              <span className="text-base font-semibold">Clio</span>
            </div>
            <p className="text-sm text-muted max-w-xs">
              AI-powered meeting transcription and notes. Free, open source, and private by design.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.download}
                className="block text-sm text-muted hover:text-foreground transition-colors"
              >
                Download
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Open Source</h4>
            <div className="space-y-2">
              <a
                href={SITE.github}
                className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                macOS App
              </a>
              <a
                href={SITE.iosGithub}
                className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                iOS App
              </a>
              <a
                href={`${SITE.github}/blob/main/LICENSE`}
                className="block text-sm text-muted hover:text-foreground transition-colors"
              >
                GPL-3.0 License
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Clio. Open source under GPL-3.0.
          </p>
          <p className="text-xs text-muted">
            Made with care in the USA.
          </p>
        </div>
      </div>
    </footer>
  );
}
