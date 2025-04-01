export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "first-post",
    title: "First Post",
    date: "2025-03-21",
    excerpt: "This is my first blog post excerpt...",
    content: "Full content of the first post goes here...",
  },
  {
    slug: "second-post",
    title: "Second Post",
    date: "2025-03-20",
    excerpt: "This is my second blog post excerpt...",
    content: "Full content of the second post goes here...",
  },
];
