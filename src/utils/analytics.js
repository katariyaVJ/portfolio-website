const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

const ensureScript = (id, src, attrs = {}) => {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  Object.entries(attrs).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  document.head.appendChild(script);
};

export const initAnalytics = () => {
  if (GA_ID) {
    ensureScript("ga-script", `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false });
  }

  if (PLAUSIBLE_DOMAIN) {
    ensureScript("plausible-script", "https://plausible.io/js/script.js", {
      "data-domain": PLAUSIBLE_DOMAIN,
    });
  }
};

export const trackPageView = (path) => {
  if (window.gtag && GA_ID) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: document.title,
    });
  }

  if (window.plausible) {
    window.plausible("pageview", { u: path });
  }
};

export const trackEvent = (name, props = {}) => {
  if (window.gtag) {
    window.gtag("event", name, props);
  }

  if (window.plausible) {
    window.plausible(name, { props });
  }
};
