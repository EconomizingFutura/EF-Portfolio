import { useLocation } from "react-router-dom";
import { usePageTracker } from "../hooks/usePageTracker";

const RouteTracker: React.FC = () => {
  const location = useLocation();

  const getPageTitle = (path: string) => {
      if (path.startsWith("/projects/")) return "Projects Details";
        if (path.startsWith("/blog/")) return "Blog Details";

    return getPageNameFromRoute(path);
  };

  const pageName = getPageTitle(location.pathname);

  usePageTracker({
    pageName,
    pagePath: location.pathname,
  });

  return null;
};

function getPageNameFromRoute(path: string): string {
  const routeMap: Record<string, string> = {
    "/": "Landing Page",
    "/projects/:id": "Projects Details",
    "/technologies": "Technologies",
    "/privacypolicy": "Privacy Policy",
    "/termsandconditions": "Terms and Conditions",
    "/blogs": "Blogs",
    "/blog/:id": "Blog",
    "/pricing":"Pricing"
    };
    
  return routeMap[path] || path;
}

export default RouteTracker;
