import { motion } from "framer-motion";

const InformationSummary = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className="rounded-2xl border border-[var(--border)] bg-[var(--card)] text-center shadow-[var(--shadow-card)] backdrop-blur-sm"
    >
      <div className="mx-2 my-4 sm:mx-4 sm:my-5">
        <p className="text-xl font-bold tabular-nums text-[var(--text)] xxs:text-2xl sm:text-3xl">
          {item.description}
        </p>
        <p className="mt-2 px-1 text-[9px] font-medium uppercase leading-snug tracking-wide text-[var(--muted)] xxs:text-[10px] sm:text-xs">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
};

export default InformationSummary;
