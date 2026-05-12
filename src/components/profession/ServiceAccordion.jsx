import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { professionSection } from "../../data/portfolio";

const ServiceAccordion = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="w-full">
      {professionSection.roles.map((role, idx) => {
        const isActive = hoveredIdx === idx;
        
        return (
          <div
            key={role.id}
            className="group cursor-pointer mb-10"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="flex flex-col">
              {/* Active Header Box (Question + Icon) */}
              <motion.div 
                animate={{
                  backgroundColor: isActive ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.02)",
                  borderColor: isActive ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
                  y: isActive ? -4 : 0,
                }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-between gap-8 px-8 py-4 rounded-[2rem] backdrop-blur-sm border shadow-lg"
              >
                <div className="flex items-center gap-12 flex-1">
                  <span className={`w-12 text-base font-bold tracking-widest transition-colors duration-500 ${
                    isActive ? "text-[var(--accent)]" : "text-white/20"
                  }`}>
                    0{idx + 1}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                    isActive ? "text-[var(--accent)]" : "text-white"
                  }`}>
                    {role.title}
                  </h3>
                </div>
                
                <div className="relative">
                  <motion.div
                    animate={{ 
                      backgroundColor: isActive ? "var(--accent)" : "rgba(255,255,255,0.05)",
                      rotate: isActive ? 180 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`w-11 h-11 rounded-full flex items-center justify-center ${
                      isActive ? "text-black" : "text-white/40 border border-white/10"
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Description */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pt-2 px-10">
                      <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-4xl">
                        {role.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceAccordion;
