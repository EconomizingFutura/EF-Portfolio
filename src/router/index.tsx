import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Blogs from "../pages/Blogs";
import Technology from "../pages/Technology";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/technologies" element={<Technology />} />
      </Routes>
    </Router>
  );
};
