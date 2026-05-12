import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6 relative overflow-hidden">
      {/* Background Perspective Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="cyber-grid-bg h-full w-full" style={{ perspective: "1000px", transform: "rotateX(60deg) scale(2)", transformOrigin: "top" }} />
      </div>

      <div className="text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative inline-block">
            <h1 className="text-[120px] md:text-[180px] font-black text-white leading-none tracking-tighter opacity-10">
              404
            </h1>
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-white whitespace-nowrap">
              Lost in <span className="text-[var(--accent)]">Space</span>
            </h2>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
            The coordinate you requested does not exist in this sector. 
            The page might have been moved or deleted.
          </p>
          
          <div className="pt-4">
            <Link
              to="/"
              className="btn-premium inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-black group transition-all"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Safety
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};

export default NotFound;
