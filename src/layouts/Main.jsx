import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import { site } from "../data/portfolio";
import { initAnalytics, trackPageView } from "../utils/analytics";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    document.title = site.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", site.metaDescription);
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      document.head.appendChild(keywords);
    }
    keywords.setAttribute("content", site.metaKeywords);
    let author = document.querySelector('meta[name="author"]');
    if (!author) {
      author = document.createElement("meta");
      author.setAttribute("name", "author");
      document.head.appendChild(author);
    }
    author.setAttribute("content", "Vijay Katariya");
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Main;
