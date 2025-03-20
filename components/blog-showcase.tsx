import { posts } from "@/lib/blog";

export default function BlogShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-5">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p className="mt-2 text-base">{post.excerpt}</p>
          <a
            href={`/blog/${post.id}`}
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}
