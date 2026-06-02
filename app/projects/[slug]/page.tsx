import type { Metadata } from "next";
import ProjectDetails from "@/components/ProjectDetails";
import { projectsInfo } from "../../lib/projects";

export async function generateStaticParams() {
  const tempProjects = projectsInfo;

  if (!Array.isArray(tempProjects)) {
    throw new Error("Projects is not an array");
  }

  return tempProjects.map((proj) => ({
    slug: proj.pathName,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsInfo.find((proj) => proj.pathName === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.projectName,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.projectName,
      description: project.description,
      url: `/projects/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectDetails slug={slug} />;
}
