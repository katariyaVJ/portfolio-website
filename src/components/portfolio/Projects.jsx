import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  const href = data?.link ?? "#";
  const isInternal = href.startsWith("/");

  return (
    <div className="premium-card group h-full flex flex-col bg-[var(--card)] p-3">
      {/* Image Container */}
      {isInternal ? (
        <Link to={href} className="block relative overflow-hidden aspect-[4/3] rounded-[1.25rem] mb-4">
          <img
            src={data?.image}
            alt={data?.imageAlt || data?.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        </Link>
      ) : (
        <div className="relative overflow-hidden aspect-[4/3] rounded-[1.25rem] mb-4">
          <img
            src={data?.image}
            alt={data?.imageAlt || data?.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* Content */}
      <div className="px-2 pb-2 flex-1 flex flex-col">
        {isInternal ? (
          <Link to={href} className="group/title">
            <h3 className="text-2xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors tracking-tight leading-tight group-hover/title:text-[var(--accent)]">
              {data?.title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-2xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors tracking-tight leading-tight">
            {data?.title}
          </h3>
        )}
        <p className="text-base text-[var(--text-muted)] mb-5 leading-relaxed font-medium">
          {data?.description}
        </p>

        <div className="mt-auto pt-3 border-t border-white/5">
          {isInternal ? (
            <Link to={href} className="inline-flex items-center text-sm font-bold text-[var(--text)] hover:text-[var(--accent)] transition-all group/link tracking-widest uppercase">
              <span>EXPLORE</span>
              <div className="w-6 h-px bg-[var(--text)] ml-3 group-hover/link:w-10 group-hover/link:bg-[var(--accent)] transition-all" />
              <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ) : (
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-[var(--text)] hover:text-[var(--accent)] transition-all group/link tracking-widest uppercase">
              <span>VIEW LIVE</span>
              <div className="w-6 h-px bg-[var(--text)] ml-3 group-hover/link:w-10 group-hover/link:bg-[var(--accent)] transition-all" />
              <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
