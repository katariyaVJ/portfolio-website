import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { blogSection } from "../data/portfolio";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogSection.posts.find((post) => post.link === `/blog/${slug}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <main className="relative min-h-screen overflow-x-clip pt-[125px] pb-24 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Blog Not Found</h2>
          <Link to="/blogs" className="btn-primary">
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-x-clip pb-24">
      <div className="content-container">
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link to="/blogs" className="inline-flex items-center text-[var(--accent)] font-bold tracking-widest uppercase text-sm group">
              <svg className="w-5 h-5 mr-3 transition-transform group-hover:-translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blogs
            </Link>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="kicker mb-6">
              <span className="kicker-dot" />
              <span className="kicker-text">Blog</span>
            </div>

            <h1 className="text-3xl md:text-[44px] font-bold text-[var(--text)] mb-8 tracking-tight leading-tight">
              {blog.title}
            </h1>

            <div className="relative overflow-hidden rounded-[2.5rem] mb-10 liquid-glass p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>

            <div className="space-y-6 text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
              {(blog.bodyParagraphs?.length
                ? blog.bodyParagraphs
                : [
                    "This article covers practical implementation ideas for the topic, with a focus on maintainable architecture and real device performance.",
                    "If you want this adapted to your product, get in touch and we can outline a concrete roadmap.",
                  ]
              ).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-[125px] p-10 rounded-[2.5rem] liquid-glass">
              <h3 className="text-2xl font-bold mb-8 text-[var(--text)]">Article Info</h3>
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">Published</span>
                  <span className="text-lg font-medium text-[var(--text)]">{blog.date}</span>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">Comments</span>
                  <span className="text-lg font-medium text-[var(--text)]">{blog.comments ?? 0}</span>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">Category</span>
                  <span className="text-lg font-medium text-[var(--text)]">{blog.category ?? "Mobile Development"}</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
