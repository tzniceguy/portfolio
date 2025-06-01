"use client";
import Link from "next/link";
import { fetchPosts } from "@/services/blog";
import { useState } from "react";
import { useEffect } from "react";
import { Post } from "@/lib/types";

export default function BlogShowcase() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  if (!posts.length) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No blog posts available yet.</p>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-5">
      {posts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          key={post.slug}
          className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-gray-400"
        >
          <article>
            <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <div className="flex items-centr gap-2 mt-2">
              <time className="text-sm text-gray-500">{post.created_at}</time>
            </div>
            <p className="mt-2 text-base">{post.slug}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}
