import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { introduction, heroSection } from "../../data/portfolio";

const Introduction = () => {
  const roles = heroSection.rotatingRoles ?? [];
  const [ri, setRi] = useState(0);

  useEffect(() => {
    if (!roles.length) return undefined;
    const t = setInterval(() => setRi((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <div className="w-full min-w-0">
      <div className="section-about">
        <div className="heading-section mb-4 sm:mb-6">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold text-[var(--text-muted)]">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            <span>About</span>
          </div>
          
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="inline-flex flex-wrap items-center justify-start gap-x-2 gap-y-1 px-4 sm:px-6 py-2 border border-[var(--accent)] rounded-sm bg-transparent max-w-full">
              <span className="text-white text-sm sm:text-base md:text-lg font-bold shrink-0">
                Hello! I&apos;m 
              </span>
              <div className="flex items-center min-w-0 flex-wrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ri}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[var(--accent)] text-sm sm:text-base md:text-lg font-bold ml-0 sm:ml-1 break-words"
                  >
                    {roles[ri]}
                  </motion.span>
                </AnimatePresence>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="w-[2px] h-[1.2em] bg-[var(--accent)] ml-1 inline-block"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-[clamp(2rem,8vw,5rem)] xl:text-[80px] font-black text-white mb-4 sm:mb-6 leading-[1.05] sm:leading-[0.95] tracking-tighter">
          {heroSection.headline.split(' ').map((word, i, arr) => (
            <span key={i}>
              {word}
              {i === arr.length - 2 && <br className="hidden sm:block" />}
              {i < arr.length - 1 && " "}
            </span>
          ))}
        </h1>
        
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-6 sm:mb-8 max-w-4xl">
          {heroSection.bioParagraphsMd.map((p, i) => {
            const parts = p.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={i}>
                {parts.map((part, j) => 
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={j} className="text-white">{part.slice(2, -2)}</strong>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          })}
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {introduction.stats.map((stat, i) => (
            <div
              key={i}
              className={`premium-card px-4 sm:px-6 py-4 group hover:border-[var(--accent)]/30 transition-all duration-500 ${
                i === introduction.stats.length - 1 ? "xs:col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                {stat.description}
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
