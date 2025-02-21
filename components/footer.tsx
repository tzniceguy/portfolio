import { Mail, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6 text-center">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="mailto:your.email@example.com"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Joe.
        </p>
      </div>
    </footer>
  );
}
