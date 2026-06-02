import type { MetadataRoute } from "next";
import { getBlogs } from "./lib/blog";
import { projectsInfo } from "./lib/projects";
import { products } from "./lib/products";

const BASE_URL = "https://economizingfutura.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/projects",
    "/products",
    "/blogs",
    "/technologies",
    "/privacypolicy",
    "/termsandconditions",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const blogRoutes = getBlogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectRoutes = projectsInfo.map((project) => ({
    url: `${BASE_URL}/projects/${project.pathName}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const productRoutes = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes, ...productRoutes];
}
