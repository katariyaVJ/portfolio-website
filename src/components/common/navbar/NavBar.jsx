import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { introduction, site, images } from "../../../data/portfolio";
import { trackEvent } from "../../../utils/analytics";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "introduction", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const NavItem = ({ link }) => {
    const isActive = pathname === link.path || (onHome && link.to === "introduction" && pathname === "/");
    
    // Always use RouterLink for Projects, Blogs, and Contact to go to dedicated pages
    const isDedicatedPage = ["Projects", "Blogs", "Contact"].includes(link.name);
    
    if (onHome && link.to && !isDedicatedPage) {
      return (
        <Link
          to={link.to}
          smooth={true}
          duration={800}
          spy={true}
          offset={-150}
          className={`cursor-pointer text-[17px] font-bold transition-colors duration-300 ${
            isActive ? "text-[var(--accent)]" : "text-white hover:text-[var(--accent)]"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.name}
        </Link>
      );
    }

    return (
      <RouterLink
        to={link.path}
        className={`text-[17px] font-bold transition-colors duration-300 ${
          isActive ? "text-[var(--accent)]" : "text-white hover:text-[var(--accent)]"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {link.name}
      </RouterLink>
    );
  };

  return (
    <header className="fixed top-[35px] left-0 right-0 z-[100] transition-all duration-500">
      <div className="content-container">
        <div 
          className={`mx-auto max-w-[1400px] rounded-full liquid-glass transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 items-center ${
            scrolled ? "shadow-[0_20px_50px_rgba(0,0,0,0.5)] !border-white/30 !bg-white/[0.06]" : ""
          }`}
          style={{ 
            padding: "12px 20px 12px 12px",
            height: "84px"
          }}
        >
          {/* Avatar & Name (Col 1-4) */}
          <div className="flex items-center gap-4 h-full lg:col-span-4">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden border border-white/10 shadow-lg">
              <img 
                src={images.hero} 
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h6 className="text-white font-bold text-xl leading-tight">{introduction.name}</h6>
              <div className="text-[14px] font-bold uppercase tracking-wider text-[var(--accent)] mt-0.5">
                {site.navSubtitle}
              </div>
            </div>
          </div>

          {/* Navigation Links (Col 5-10) - Aligning with introduction section */}
          <div className="hidden lg:block lg:col-span-6 lg:pl-[120px]">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavItem link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button & Mobile Toggle (Col 11-12) */}
          <div className="flex items-center justify-end gap-4 lg:col-span-2">
            <RouterLink 
              to="/contact" 
              onClick={() => trackEvent("cta_click", { cta_name: "hire_me_navbar" })}
              className="bg-[var(--accent)] hover:bg-[#00d084] text-black font-bold py-2.5 px-8 rounded-full transition-all duration-300 text-[15px] shadow-[0_10px_20px_rgba(0,255,153,0.2)]"
            >
              Hire Me
            </RouterLink>
            
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[110px] left-5 right-5 z-[110] liquid-glass p-8 rounded-[2rem] shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavItem link={link} />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
