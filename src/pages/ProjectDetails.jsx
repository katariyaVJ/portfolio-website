import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioSection } from "../data/portfolio";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = portfolioSection.projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="relative min-h-screen overflow-x-clip pt-[125px] pb-24 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-x-clip pb-24">
      <div className="content-container">
        {/* Navigation Back */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link to="/projects" className="inline-flex items-center text-[var(--accent)] font-bold tracking-widest uppercase text-sm group">
              <svg className="w-5 h-5 mr-3 transition-transform group-hover:-translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Projects
            </Link>
          </motion.div>
        </section>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="kicker">
              <span className="kicker-dot" />
              <span className="kicker-text">{project.category}</span>
            </div>
            <h1 className="text-3xl md:text-[44px] font-bold text-[var(--text)] mb-8 tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed mb-10">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {project.technologies.split(',').map((tech, i) => (
                <span key={i} className="px-5 py-2 rounded-full bg-[var(--card)] border border-white/10 text-sm font-bold tracking-wider uppercase text-[var(--accent)]">
                  {tech.trim()}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 !px-10"
                >
                  <span>Visit Website</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ) : null}
              <Link
                to="/contact"
                className={
                  project.liveLink
                    ? "inline-flex items-center gap-3 !px-10 py-3 rounded-xl font-bold border border-white/15 text-[var(--text)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-colors"
                    : "btn-primary inline-flex items-center gap-3 !px-10"
                }
              >
                Discuss this project
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="liquid-glass p-2 overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            {/* Abstract Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent)]/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[var(--accent)]/5 blur-[100px] rounded-full" />
          </motion.div>
        </div>

        {/* Features & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-[125px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <h2 className="text-3xl font-bold mb-10 text-[var(--text)]">Key Features</h2>
            <div className="space-y-6">
              {project.features.map((feature, i) => {
                const colonIdx = feature.indexOf(":");
                const title = colonIdx > 0 ? feature.slice(0, colonIdx).trim() : feature.trim();
                const detail = colonIdx > 0 ? feature.slice(colonIdx + 1).trim() : "";
                return (
                  <div
                    key={i}
                    className="flex items-start gap-5 p-6 rounded-3xl liquid-glass hover:bg-white/[0.05] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--text)] mb-2">{title}</h4>
                      {detail ? (
                        <p className="text-[var(--text-muted)] leading-relaxed">{detail}</p>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-[125px] p-10 rounded-[2.5rem] liquid-glass">
              <h3 className="text-2xl font-bold mb-8 text-[var(--text)]">Project Info</h3>
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">Category</span>
                  <span className="text-lg font-medium text-[var(--text)]">{project.category}</span>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">Tools & Tech</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.split(',').map((tech, i) => (
                      <span key={i} className="text-xs font-bold text-[var(--text)] py-1.5 px-3 rounded-lg bg-white/5">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">Client Location</span>
                  <span className="text-lg font-medium text-[var(--text)]">India / Remote</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
