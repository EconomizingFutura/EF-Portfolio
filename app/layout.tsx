import "./../globals.css";
import type { Metadata } from "next";
import LenisProvider from "@/utils/LenisProvider";
import RouterProvider from "@/utils/RouterProvider";

const description =
  "Economizing Futura delivers innovative digital solutions, transforming ideas into powerful software for startups and businesses worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL("https://economizingfutura.com"),
  title: {
    default: "Economizing Futura | Innovative Digital Solutions",
    template: "%s | Economizing Futura",
  },
  description,
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Economizing Futura",
    url: "/",
    title: "Economizing Futura | Innovative Digital Solutions",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Economizing Futura | Innovative Digital Solutions",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <RouterProvider>{children}</RouterProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
