import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
// import Pricing from "../pages/Pricing";
// import { Price } from "../pages/Price";
import Blogs from "../pages/Blogs";
import Technology from "../pages/Technology";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import ReactForms from "../pages/ReactForms";
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
        {/* <Route path="/pricing" element={<Price />} /> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/technologies" element={<Technology />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
    </Router>
  );
};
