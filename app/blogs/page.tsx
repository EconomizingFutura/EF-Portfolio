import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";

const description =
  "Read the latest blogs from Economizing Futura on technology, design, and digital solutions.";

export const metadata: Metadata = {
  title: "Blogs",
  description,
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blogs | Economizing Futura",
    description,
    url: "/blogs",
  },
};

export default function Page() {
  return <BlogsClient />;
}
