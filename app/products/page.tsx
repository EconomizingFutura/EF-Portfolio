import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

const description =
  "Ready-to-use tools built in-house by Economizing Futura. Browse our products and request access to get started.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Economizing Futura",
    description,
    url: "/products",
  },
};

export default function Page() {
  return <ProductsClient />;
}
