import { useEffect, useRef } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebaseConfig";

interface PageTrackingOptions {
  pageName: string;
  pagePath?: string;
  extraParams?: Record<string, any>;
}

export const usePageTracker = ({
  pageName,
  pagePath,
  extraParams,
}: PageTrackingOptions) => {
  const startTimeRef = useRef<Date | null>(null);
  logEvent(analytics, "test_debug_event", {
    debug_param: "hello world"
  });

  useEffect(() => {
    
    startTimeRef.current = new Date();


    return () => {
      if (startTimeRef.current) {
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
      }
    };
  }, [pageName, pagePath, extraParams]);
};
