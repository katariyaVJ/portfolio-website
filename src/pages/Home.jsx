import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-[125px] lg:gap-y-0 items-stretch">
          <div className="lg:col-span-4 pt-[125px]">
            {/* Sticky inside a tall stretched column rows with intro + resume scroll away after resume / View My CV */}
            <div className="lg:sticky lg:top-[125px] lg:self-start lg:pb-8">
              <Profile />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col min-h-0 lg:pl-[120px]">
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
