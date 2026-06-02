import type { Metadata } from "next";
import TechnologiesClient from "./TechnologiesClient";

const description =
  "Explore the cutting-edge technologies we use at Economizing Futura to build fast, reliable software.";

export const metadata: Metadata = {
  title: "Technologies",
  description,
  alternates: { canonical: "/technologies" },
  openGraph: {
    title: "Technologies | Economizing Futura",
    description,
    url: "/technologies",
  },
};

export default function Page() {
  return <TechnologiesClient />;
}
