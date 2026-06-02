import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

const description =
  "Explore the portfolio of products and platforms built by Economizing Futura — from web and mobile apps to custom software.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Economizing Futura",
    description,
    url: "/projects",
  },
};

export default function Page() {
  return <ProjectsClient />;
}
