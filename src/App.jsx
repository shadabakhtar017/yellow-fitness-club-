import React, { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import useDocumentTitle from "./hooks/useDocumentTitle";

// Code-split pages for performance optimization
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Trainers = lazy(() => import("./pages/Trainers"));
const Membership = lazy(() => import("./pages/Membership"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Minimalist fallback during page chunk loading
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#080809]">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#FFE500] animate-ping" />
        <span className="font-display font-bold uppercase text-xs tracking-widest text-zinc-400">
          Loading Yellow Fitness...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  // Dynamic SEO Page Title & Meta description updater
  useDocumentTitle();

  return (
    <div className="min-h-screen bg-[#080809] text-white flex flex-col justify-between selection:bg-[#FFE500] selection:text-black">
      {/* Scroll to top automatically on route changes */}
      <ScrollToTop />

      {/* Cinematic Intro Preloader on first load */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {/* Sticky Responsive Navigation */}
      <Navbar />

      {/* Main Page Content with Suspense */}
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
}
