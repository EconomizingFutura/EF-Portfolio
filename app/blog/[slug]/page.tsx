// app/blog/[slug]/page.tsx
import BlogsPage from "@/components/BlogsPage";
import { Metadata } from "next";
import { getBlogs } from "../../lib/blog";

export async function generateStaticParams() {
  const blogs = getBlogs;

  if (!Array.isArray(blogs)) {
    throw new Error("blogs is not an array");
  }

  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const blogs = getBlogs;
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found",
    };

  return {
    title: blog.header,
    description: blog.sub,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: blog.header,
      description: blog.sub,
      url: `/blog/${slug}`,
      images: blog.thumbnail ? [blog.thumbnail] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blogs = getBlogs;
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return <BlogsPage slug={slug} />;
}
