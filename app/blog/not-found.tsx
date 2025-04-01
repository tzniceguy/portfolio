import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
      <p className="text-gray-600 mb-8">
        Sorry, we couldn't find the blog post you're looking for.
      </p>
      <Link
        href="/blog"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        ← Back to all posts
      </Link>
    </main>
  );
}
