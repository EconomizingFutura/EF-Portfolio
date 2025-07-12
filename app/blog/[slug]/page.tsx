// app/blog/[slug]/page.tsx
import BlogsPage from "@/components/BlogsPage";
import { Metadata } from "next";
import { getBlogs } from "../../lib/blog";


// ✅ Static paths
export async function generateStaticParams() {
  const blogs =  getBlogs;
  
  if (!Array.isArray(blogs)) {
    throw new Error("blogs is not an array");
  }

  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ SEO metadata
export async function generateMetadata(
  { params }: {params: Promise<{ slug: string }>} // No need to await params
): Promise<Metadata> {
  const blogs =  getBlogs;
const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) return { 
    title: "Blog Not Found",
    description: "The requested blog post could not be found"
  };

  return {
    title: blog.header,
    description: blog.sub,
  };
}

// ✅ Page
export default async function Page({ params }: {params: Promise<{ slug: string }>}) {
  const blogs =  getBlogs;
const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return <BlogsPage slug={slug} />; // Pass the entire blog object to the component
}
