import { useEffect, useRef } from "react";
import { logEvent } from "firebase/analytics";
import { getAnalyticsClient } from "@/config/firebaseConfig";

interface PageTrackingOptions {
  pageName: string;
  pagePath?: string;
  extraParams?: Record<string, never>;
}

export const usePageTracker = ({
  pageName,
  pagePath,
  extraParams,
}: PageTrackingOptions) => {
  const startTimeRef = useRef<Date | null>(null);

  useEffect(() => {
    startTimeRef.current = new Date();

    return () => {
      const track = async () => {
        if (!startTimeRef.current) return;

        const analytics = await getAnalyticsClient();
        if (!analytics) return;

        const endTime = new Date();
        const durationSeconds =
          (endTime.getTime() - startTimeRef.current.getTime()) / 1000;

        console.log(`Page ${pageName} took ${durationSeconds} `);

        logEvent(analytics, "page_time_spent", {
          page_name: pageName,
          page_path: pagePath || window.location.pathname,
          duration_seconds: durationSeconds,
          ...extraParams,
        });
      };

      track();
    };
  }, [pageName, pagePath, extraParams]);
};
