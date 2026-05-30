import { motion } from "framer-motion";
import { blogSection } from "../data/portfolio";
import MonoBlog from "../components/blog/MonoBlog";

const BlogsPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip pb-24">
      <div className="content-container">
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-8"
          >
            <div className="kicker">
              <span className="kicker-dot" />
              <span className="kicker-text">Blog</span>
            </div>
            <h1 className="text-3xl md:text-[44px] font-bold text-[var(--text)] mb-8 tracking-tight">
              Latest Insights
            </h1>
            <p className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl">
              {blogSection.subtitle}
            </p>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogSection.posts.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <MonoBlog data={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogsPage;
