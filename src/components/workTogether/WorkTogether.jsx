import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { workTogether } from "../../data/portfolio";

const WorkTogether = () => {
  return (
    <div className="mx-auto max-w-169 px-2 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center"
      >
        <p className="pb-6 text-2xl font-semibold text-[var(--text)] sm:text-3xl md:text-5xl md:leading-tight">
          {workTogether.title}
        </p>
        <p className="mx-auto max-w-2xl pb-10 text-xs text-[var(--muted)] sm:text-lg">{workTogether.subtitle}</p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
          <Link
            to={workTogether.ctaHref}
            className="btn-premium inline-flex items-center gap-3 !px-6 !py-3 text-sm md:!px-8 md:!py-4 md:text-base"
          >
            {workTogether.ctaLabel}
            <FontAwesomeIcon icon={faArrowRight} className="text-[#0a0a0a]" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkTogether;
