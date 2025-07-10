import "./../globals.css";
import LenisProvider from "@/utils/LenisProvider";
import RouterProvider from "@/utils/RouterProvider";
export const metadata = {
  title: "Economizing Futura",
  description:
    "Economizing Futura delivers innovative digital solutions, transforming ideas into powerful software for startups and businesses worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Economizing Futura</title>
      </head>
      <body>
        <LenisProvider>
          <RouterProvider>{children}</RouterProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
