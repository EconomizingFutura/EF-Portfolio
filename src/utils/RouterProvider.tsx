"use client";
import { getPageNameFromRoute } from "@/constants/constants";
import { usePageTracker } from "@/hooks/usePageTracker";
import { usePathname } from "next/navigation";

export default function RouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const pageName = getPageNameFromRoute(pathname);

  usePageTracker({
    pageName,
    pagePath: pathname,
  });

  return <>{children}</>;
}
