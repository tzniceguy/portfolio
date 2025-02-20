"use client";
import Link from "next/link";
import { Menu, User, Languages, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ModeToggle } from "./toggle-theme";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEsc = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navitems = [
    { title: "guestbook", href: "/guestbook" },
    { title: "projects", href: "/projects" },
    { title: "blog", href: "/blog" },
    { title: "uses", href: "/uses" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-md shadow-sm rounded-md border bg-white/80 dark:bg-gray-900/80">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-2">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <User className="h-6 w-6" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navitems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`relative font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-300 capitalize py-2 ${
                  pathname === item.href
                    ? "text-indigo-600 dark:text-indigo-400 active-link"
                    : "hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded glow-animation" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Sheet Mobile Navigation */}
      <>
        {/* Backdrop overlay with transition */}
        <div
          className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Bottom sheet with transition */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 rounded-t-2xl shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="relative p-4">
            {/* Handle bar */}
            <div className="mx-auto w-12 h-1 bg-gray-300 dark:bg-gray-700 rounded-full mb-6" />

            {/* Close button */}
            <button
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>

            <div className="pt-2">
              <h3 className="text-md font-bold text-gray-900 dark:text-gray-100 mb-6">
                Navigation
              </h3>
              <nav className="flex flex-col">
                {navitems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`p-3 mb-1 rounded-md transition-all duration-200 capitalize ${
                      pathname === item.href
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                    {pathname === item.href && (
                      <span className="block h-0.5 w-12 mt-1 bg-indigo-500 rounded glow-animation" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </>

      {/* Add global styles for the glow animation */}
      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 2px rgba(99, 102, 241, 0.4);
          }
          50% {
            box-shadow: 0 0 8px rgba(99, 102, 241, 0.7);
          }
          100% {
            box-shadow: 0 0 2px rgba(99, 102, 241, 0.4);
          }
        }
        .glow-animation {
          animation: glow 2s infinite;
        }
      `}</style>
    </>
  );
}
