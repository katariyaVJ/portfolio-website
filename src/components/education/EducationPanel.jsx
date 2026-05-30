import { motion } from "framer-motion";
import { educationSection } from "../../data/portfolio";
import { trackEvent } from "../../utils/analytics";

const EducationPanel = () => {
  return (
    <div className="section-resume">
      <div className="heading-section mb-6">
        <div className="kicker !mb-4">
          <span className="kicker-dot" />
          <span className="kicker-text">Resume</span>
        </div>
        <h2 className="text-3xl md:text-[44px] font-bold text-white tracking-tight">
          {educationSection.title}
        </h2>
      </div>
      
      <div className="space-y-0 relative border-l border-white/5 ml-4">
        {educationSection.items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-12 pb-6 group"
          >
            {/* Timeline Point */}
            <div className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-[var(--accent)] transition-all duration-500 shadow-[0_0_10px_var(--accent-glow)] group-hover:scale-125 z-10" />
            
            <div className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-[var(--accent)]/20 transition-all duration-500 relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h5 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-base text-[var(--text-muted)]">
                    {item.school}
                  </p>
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-[var(--accent)]/60 transition-colors">
                  {item.period}
                </div>
              </div>
              
              {/* Subtle background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:bg-[var(--accent)]/10 transition-all duration-700" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <a 
          href={educationSection.cvHref} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={() => trackEvent("cv_click", { location: "resume_section_centered" })}
          className="btn-premium w-fit !px-10 !py-3 !rounded-xl shadow-lg group relative overflow-hidden text-sm"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="relative z-10 font-bold">{educationSection.cvLabel ?? "View My CV"}</span>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

export default EducationPanel;
