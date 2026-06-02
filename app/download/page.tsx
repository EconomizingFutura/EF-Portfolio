import type { Metadata } from "next";
import { Suspense } from "react";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: "Download",
  description: "Download your purchased application from Economizing Futura.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/download" },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <DownloadClient />
    </Suspense>
  );
}
