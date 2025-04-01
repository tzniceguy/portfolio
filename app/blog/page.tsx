import BlogShowcase from "@/components/blog-showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog | Coding & Musings",
  description:
    "A blog about coding challenges, tech insights, and life as a developer.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="h-full flex flex-col mt-10 animate-fade-in">
        <div className="border-b pb-6">
          <h1 className="text-3xl font-semibold">Blog</h1>
          <p className="mt-2 text-base">
            Welcome to my little corner of the web! Here, I dump my brain about
            coding challenges I’ve tackled, tech insights I’ve stumbled upon,
            and occasional life musings that somehow relate to programming. This
            blog runs on Next.js with a Django backend—a stack I’ve grown to
            love for its flexibility. When I’m stuck on a problem at 2 AM,
            writing about it here often leads me to the solution. Plus,
            documenting my developer journey gives me something to laugh at
            years later when I look back at code I once thought was brilliant.
          </p>
        </div>
      </div>
      <div>
        <BlogShowcase />
      </div>
    </main>
  );
}
