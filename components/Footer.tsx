import type React from "react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">
            Made with ❤️ by{" "}
            <a
              href="https://houlamy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 underline decoration-dotted hover:text-slate-900 font-medium transition-colors"
            >
              Nathan
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/nathanhoulamy/wallrice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-800 transition-colors text-sm font-medium"
            >
              Code
            </a>
            <a
              href="https://github.com/nathanhoulamy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-800 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nathanhoulamy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-800 transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/nathanhoulamy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-800 transition-colors text-sm font-medium"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
