
import ProjectDetails from "@/components/ProjectDetails";
import { projectsInfo } from "../../lib/projects";

export async function generateStaticParams() {
  const tempProjects =  projectsInfo;
  
  if (!Array.isArray(tempProjects)) {
    throw new Error("Projects is not an array");
  }

  return tempProjects.map((proj) => ({
    slug: proj.pathName,
  }));
}

export default async function Page({ params }: {params: Promise<{ slug: string }>}) {
  const { slug } = await params;

  return <ProjectDetails slug={slug} />;
}
