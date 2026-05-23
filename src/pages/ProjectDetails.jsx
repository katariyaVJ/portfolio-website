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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-[45px]"
        >
          <div className="kicker mb-6">
            <span className="kicker-dot" />
            <span className="kicker-text">{project.category}</span>
          </div>
          <h1 className="text-4xl md:text-[56px] font-bold text-[var(--text)] mb-10 tracking-tight leading-tight max-w-5xl">
            {project.title}
          </h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-[40px] md:space-y-[60px]"
          >
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--text)]">Overview</h2>
              <div className="text-[var(--text-muted)] text-lg leading-relaxed font-medium">
                <p>{project.longDescription}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[var(--text)]">Key Features</h2>
              <div className="flex flex-col gap-6">
                {project.features.map((feature, i) => {
                  const colonIdx = feature.indexOf(":");
                  const title = colonIdx > 0 ? feature.slice(0, colonIdx).trim() : feature.trim();
                  const detail = colonIdx > 0 ? feature.slice(colonIdx + 1).trim() : "";
                  return (
                    <div key={i} className="flex flex-col group">
                      <div className="flex items-start gap-3 mb-1">
                        <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <h4 className="text-xl font-bold text-[var(--text)]">{title}</h4>
                      </div>
                      {detail && (
                        <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed pl-8">
                          {detail}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Result & Impact */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--text)]">Result & Impact</h2>
              <div className="flex flex-col gap-4 text-[var(--text-muted)] text-base md:text-lg leading-relaxed pl-6 border-l-4 border-[var(--accent)]/50 bg-white/[0.02] p-6 rounded-r-2xl">
                <p>{project.resultAndImpact}</p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar (Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-[125px] flex flex-col gap-8">
              
              {/* Project Info Card */}
              <div className="pt-8 pb-8 px-[5%] rounded-[2rem] liquid-glass border border-white/5 text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-6 text-[var(--text)]">Project Info</h3>
                <div className="space-y-6 w-full flex flex-col items-center">
                  <div className="w-full">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">Project Name</span>
                    <span className="text-base font-medium text-[var(--text)]">{project.title}</span>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  
                  <div className="w-full">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">Category</span>
                    <span className="text-base font-medium text-[var(--text)]">{project.category}</span>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  
                  {project.liveLink && (
                    <>
                      <div className="w-full">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">Live Link</span>
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-base font-medium text-[var(--accent)] hover:underline break-all"
                        >
                          {project.liveLink.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                      <div className="w-full h-px bg-white/5" />
                    </>
                  )}

                  <div className="pt-2 w-full flex justify-center">
                    <Link 
                      to="/contact" 
                      className="inline-flex justify-center px-8 py-3 rounded-full bg-[var(--accent)] text-black font-bold hover:scale-105 hover:shadow-[0_0_20px_var(--accent-glow)] transition-all"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="pt-6 pb-6 px-[5%] rounded-[2rem] liquid-glass border border-white/5">
                <h3 className="text-2xl font-bold mb-6 text-[var(--text)] text-center">Tech Stack</h3>
                <ul className="flex flex-col gap-3">
                  {project.technologies.split(',').map((tech, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                      <span className="text-base font-medium text-[var(--text)]">{tech.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
