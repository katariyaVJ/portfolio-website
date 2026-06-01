import { introduction, site, images } from "../../data/portfolio";
import SocialMedia from "../common/socialMedia/SocialMedia";
import "./profile.css";

const Profile = () => {
  return (
    <div className="z-30 w-full">
      <div className="glass-panel hero-profile-card text-center relative overflow-hidden group w-full">
        <div className="absolute -top-24 -left-24 w-32 h-32 sm:w-48 sm:h-48 bg-[var(--accent)]/10 rounded-full blur-[60px] group-hover:bg-[var(--accent)]/20 transition-all duration-700" />

        <div className="relative z-10 w-full">
          <div 
            className="w-full mx-auto max-w-[314px] rounded-[2rem] overflow-hidden mb-8 border border-white/5 group-hover:border-[var(--accent)]/20 transition-all duration-500"
            style={{ aspectRatio: '1 / 1' }}
          >
            <img
              decoding="async"
              fetchPriority="high"
              src={images.hero}
              className="w-full h-full object-cover transition-all duration-700"
              alt={images.heroAlt ?? introduction.name}
            />
          </div>

          <div className="info w-full min-w-0">
            <h2 className="hero-profile-name text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight px-1">
              {introduction.name}
            </h2>
            <p className="hero-profile-subtitle font-bold uppercase text-[var(--accent)] mb-6 sm:mb-8 px-1">
              {site.navSubtitle}
            </p>

            <div className="flex flex-col gap-2 mb-8 sm:mb-10 px-1">
              <div className="pb-2 min-w-0">
                <a
                  href={`mailto:${introduction.ctaEmail}`}
                  className="email-link text-sm sm:text-base break-all sm:break-normal"
                >
                  {introduction.ctaEmail}
                </a>
              </div>
              <p className="text-[var(--text-muted)] font-medium text-sm sm:text-base">
                {site.locationLine}
              </p>
            </div>
          </div>

          <SocialMedia className="justify-center flex-wrap gap-3 sm:gap-4" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
