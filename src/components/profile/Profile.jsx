import { introduction, site, images } from "../../data/portfolio";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div className="z-30">
      <div className="glass-panel rounded-[2rem] py-10 text-center relative overflow-hidden group">
        {/* Decorative blur */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[60px] group-hover:bg-[var(--accent)]/20 transition-all duration-700" />

        <div className="relative z-10">
          <div className="w-full aspect-square max-w-[314px] mx-auto rounded-[2rem] overflow-hidden mb-8 border border-white/5 group-hover:border-[var(--accent)]/20 transition-all duration-500">
            <img
              decoding="async"
              loading="lazy"
              src={images.hero}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt={introduction.name}
            />
          </div>

          <div className="info">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
              {introduction.name}
            </h2>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-8">
              {site.navSubtitle}
            </p>

            <div className="flex flex-col gap-2 mb-10">
              <div className="pb-2">
                <a
                  href={`mailto:${introduction.ctaEmail}`}
                  className="email-link"
                >
                  {introduction.ctaEmail}
                </a>
              </div>
              <p className="text-[var(--text-muted)] font-medium">
                {site.locationLine}
              </p>
            </div>
          </div>

          <SocialMedia className="justify-center" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
