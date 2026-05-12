import { HashLoader } from "react-spinners";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg)]"
    >
      <div className="relative">
        <HashLoader color="var(--accent)" speedMultiplier={1.5} size={60} />
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)]"
        >
          Loading Experience
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
