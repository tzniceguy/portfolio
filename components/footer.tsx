import { Heart, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Joe.</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">
            Built with{" "}
            <Heart size={12} className="text-red-500 animate-pulse" /> and lots
            of
            <Coffee size={12} className="text-amber-600" />
          </span>
        </div>

        {/* Tech Stack */}
        <div className="flex items-center gap-2 text-xs opacity-60">
          <span>Powered by</span>
          <div className="flex items-center gap-1">
            {["Next.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
              <span key={tech} className="flex items-center">
                {index > 0 && <span className="mx-1">•</span>}
                <span className="hover:opacity-100 transition-opacity cursor-default">
                  {tech}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
