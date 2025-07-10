import { blogs } from "@/constants/constants";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <div>Slug: {params.slug}</div>;
}
