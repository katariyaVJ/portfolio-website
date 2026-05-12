import { site } from "../../../data/portfolio";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[var(--bg)]">
      <div className="content-container">
        <div className="flex flex-col items-center justify-center text-sm text-[var(--text-muted)]">
          <p>&copy; 2026 {site.footerCopyrightName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
