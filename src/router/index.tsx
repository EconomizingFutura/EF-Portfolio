import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  Blog,
  Blogs,
  Home,
  PrivacyPolicy,
  Projects,
  ReactForms,
  Technology,
  TermsAndConditions,
} from "../pages/index";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};
export const AppRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<ReactForms />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/technologies" element={<Technology />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
};
