import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Roles = ({ role, index }) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group border-b border-[var(--border)] py-5 first:pt-0 last:border-0 last:pb-0"
    >
      <div className="flex gap-4 sm:gap-5">
        <span className="mt-0.5 shrink-0 text-lg font-bold tabular-nums text-[var(--accent)]/90 sm:text-xl">
          {num}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold leading-snug text-[var(--text)] sm:text-base md:text-lg">
              {role?.title}
            </h3>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="mt-1 h-4 w-4 shrink-0 text-[var(--muted)] opacity-50 transition-all group-hover:text-[var(--accent)] group-hover:opacity-100"
            />
          </div>
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm md:text-[15px]">
            {role?.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Roles;
