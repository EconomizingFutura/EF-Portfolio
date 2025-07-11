import BlogsPage from "@/components/BlogsPage";
import { blogs } from "@/constants/constants";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogsPage slug={params.slug} />;
}
