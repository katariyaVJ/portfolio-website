import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { blogSection } from "../data/portfolio";
import fallbackImg from "../assets/images/blog/blog-2.jpg";

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
          <Link to="/blogs" className="btn-premium">
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-x-clip pb-24">
      <Helmet>
        <title>{blog.title} | Vijay Katariya's Blog</title>
        <meta name="description" content={blog.description} />
      </Helmet>
      {/* max-w-4xl for single column reading layout */}
      <div className="content-container max-w-4xl mx-auto">
        
        {/* Navigation Back */}
        <section className="!pt-8">
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

        <article className="pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="kicker mb-6">
              <span className="kicker-dot" />
              <span className="kicker-text">{blog.category ?? "Article"}</span>
            </div>

            <h1 className="text-3xl md:text-[56px] font-bold text-[var(--text)] mb-8 tracking-tight leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info Row */}
            <div className="flex flex-wrap items-center gap-4 text-[var(--text-muted)] text-base mb-10 border-b border-white/10 pb-8">
              <span>Published: {blog.date}</span>
              <span className="hidden sm:inline">•</span>
              <span>{blog.comments ?? 0} Comments</span>
              <span className="hidden sm:inline">•</span>
              <span>Category: {blog.category}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-16"
          >
            {/* Image 1 (Hero) */}
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              decoding="async"
              className="w-full aspect-video md:aspect-[21/9] object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </motion.div>

          {/* Content Sections One by One */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16 text-[var(--text-muted)] text-lg md:text-xl leading-relaxed font-medium"
          >
            {blog.sections ? (
              blog.sections.map((section, idx) => {
                if (section.type === "paragraph") {
                  return (
                    <div key={idx}>
                      {section.heading && <h2 className="text-3xl font-bold text-[var(--text)] mb-6">{section.heading}</h2>}
                      <div className="space-y-6">
                        {Array.isArray(section.content) ? (
                          section.content.map((p, pIdx) => <p key={pIdx}>{p}</p>)
                        ) : (
                          <p>{section.content}</p>
                        )}
                      </div>
                    </div>
                  );
                } else if (section.type === "list") {
                  return (
                    <div key={idx}>
                      {section.heading && <h2 className="text-3xl font-bold text-[var(--text)] mb-6">{section.heading}</h2>}
                      <ul className={section.listType === "decimal" ? "list-decimal pl-6 space-y-4 mb-6" : "list-disc pl-6 space-y-4 mb-6"}>
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            {item.title && <strong className="text-[var(--text)]">{item.title}: </strong>}
                            <span>{item.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                } else if (section.type === "image") {
                  return (
                    <div key={idx} className="py-8">
                      <img
                        src={section.url}
                        alt={section.alt || "Visualization"}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-video md:aspect-[16/9] object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5"
                      />
                    </div>
                  );
                }
                return null;
              })
            ) : (
              <>
                {/* Fallback old hardcoded rendering if sections doesn't exist */}
                {/* Introduction */}
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Introduction</h2>
                  <p>
                    {blog.bodyParagraphs?.[0] || "This article covers practical implementation ideas for the topic, with a focus on maintainable architecture and real device performance. When building scalable solutions, starting with a clear understanding of the goals is crucial."}
                  </p>
                </div>

                {/* Problem */}
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The Problem</h2>
                  <p>
                    {blog.bodyParagraphs?.[1] || "Without proper structure, systems tend to become unmaintainable over time. Common issues include tight coupling, lack of clear documentation, and poor scalability which drastically affects performance under load. This creates immense technical debt that slows down future feature delivery."}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The Solution</h2>
                  <p>
                    {blog.bodyParagraphs?.[2] || "By implementing robust architectural patterns, we can decouple components and ensure seamless updates. Proper integration tests and a dedicated client layer keep the frontend clean and isolated from backend API changes. We established strict guidelines and automated pipelines to ensure code quality."}
                  </p>
                </div>

                {/* Image 2 (Secondary) */}
                <div className="py-8">
                  <img
                    src={blog.image2 || blog.image}
                    alt="Secondary visualization"
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-video md:aspect-[16/9] object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5"
                  />
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Key Benefits</h2>
                  <ul className="list-disc pl-6 space-y-4 mb-6">
                    <li><strong>Maintainability:</strong> Improved code structure making future updates effortless.</li>
                    <li><strong>Performance:</strong> Better optimization and significantly reduced load times.</li>
                    <li><strong>Scalability:</strong> Seamless ability to accommodate future product roadmaps and traffic spikes.</li>
                    <li><strong>Security:</strong> Enhanced predictability and security across the entire stack.</li>
                  </ul>
                  {blog.bodyParagraphs?.[3] && <p>{blog.bodyParagraphs[3]}</p>}
                </div>

                {/* Final Thoughts */}
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Final Thoughts</h2>
                  <p>
                    {blog.bodyParagraphs?.[4] || "Ultimately, taking the time to architect your approach pays massive dividends as your user base grows. Proper planning eliminates tech debt before it even occurs. If you want this adapted to your product, get in touch and we can outline a concrete roadmap."}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </article>
      </div>
    </main>
  );
};

export default BlogDetails;
