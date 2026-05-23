import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MonoBlog from "./MonoBlog";
import { blogSection } from "../../data/portfolio";

const Blog = ({ hideHeader = false }) => {
  const preview = blogSection.posts.slice(0, blogSection.previewCount ?? 3);

  return (
    <>
      {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-12"
        >
          <div className="max-w-3xl">
            <div className="kicker">
              <span className="kicker-dot" />
              <span className="kicker-text">
                {blogSection.sectionKicker}
              </span>
            </div>
            <h2 className="text-3xl md:text-[44px] font-bold text-[var(--text)] mb-6">
              {blogSection.title}
            </h2>
            <p className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed">
              {blogSection.subtitle}
            </p>
          </div>
          
          <Link to="/blogs" className="btn-ghost group !px-8 whitespace-nowrap flex items-center">
            <span>{blogSection.viewAllLabel}</span>
            <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {preview.map((data, index) => (
          <motion.div
            key={data.id ?? index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="h-full"
          >
            <MonoBlog data={data} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Blog;
