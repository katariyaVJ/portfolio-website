import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Profile from "../components/profile/Profile";
import Introduction from "../components/introduction/Introduction";
import Portfolio from "../components/portfolio/Portfolio";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import ContactSection from "../components/newsletter/Newsletter";
import EducationPanel from "../components/education/EducationPanel";

const SECTION_BY_PATH = {
  projects: "portfolio",
  blogs: "blog",
  contact: "newsletter",
};

const Home = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const segment = pathname.replace(/\/$/, "").split("/").filter(Boolean).pop() ?? "";
    const sectionId = SECTION_BY_PATH[segment];
    if (sectionId) {
      const t = window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => window.clearTimeout(t);
    }
    const hashId = hash?.replace(/^#/, "") ?? "";
    if (hashId) {
      const t = window.setTimeout(() => {
        document.getElementById(hashId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => window.clearTimeout(t);
    }
  }, [pathname, hash]);

  return (
    <main className="relative min-h-screen overflow-x-clip pb-24">
      <div className="content-container">
        <div className="home-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-y-10 sm:gap-y-14 md:gap-y-20 lg:gap-y-0 items-stretch">
          <div className="lg:col-span-4 pt-4 sm:pt-8 md:pt-12 lg:pt-[125px] w-full">
            <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 lg:sticky lg:top-24 xl:top-[125px] lg:self-start lg:pb-6 xl:pb-8">
              <Profile />
            </div>
          </div>

          <div className="lg:col-span-8 lg:pt-[125px] flex flex-col min-h-0 w-full min-w-0 lg:pl-6 xl:pl-16 2xl:pl-[120px]">
            <section id="introduction">
              <Introduction />
            </section>

            <section id="resume">
              <EducationPanel />
            </section>
          </div>
        </div>

        <div className="flex flex-col overflow-x-clip">
          <section id="profession">
            <Profession />
          </section>

          <section id="portfolio">
            <Portfolio />
          </section>

          <section id="blog">
            <Blog />
          </section>

          <section id="newsletter">
            <ContactSection />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
