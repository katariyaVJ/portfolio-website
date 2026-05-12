import { Link } from "react-router-dom";

const MonoBlog = ({ data }) => {
  const href = data?.link ?? "#";
  const isInternal = href.startsWith("/");

  return (
    <div className="premium-card group h-full flex flex-col">
      {isInternal ? (
        <Link to={href} className="block relative overflow-hidden aspect-[16/9]">
          <img
            src={data?.image}
            alt={data?.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white">
              {data?.date}
            </span>
          </div>
        </Link>
      ) : (
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={data?.image}
            alt={data?.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white">
              {data?.date}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-4 flex-1 flex flex-col">
        {isInternal ? (
          <Link to={href} className="group/title">
            <h3 className="text-xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2 group-hover/title:text-[var(--accent)]">
              {data?.title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
            {data?.title}
          </h3>
        )}
        
        <div className="mt-auto">
          {isInternal ? (
            <Link to={href} className="inline-flex items-center text-base font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors group/link">
              Read Article
              <svg className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ) : (
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-base font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors group/link">
              Read Article
              <svg className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonoBlog;
