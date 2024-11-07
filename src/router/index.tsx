import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Blogs from "../pages/Blogs";
import Technology from "../pages/Technology";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";

export const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/technologies" element={<Technology />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
  );
};
