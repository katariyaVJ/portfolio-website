/**
 * Portfolio — Vijay Katariya
 * Inspired layout cues: modern dev portfolio aesthetics (e.g. brijeshvamja.com).
 */

import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import heroPortrait from "../assets/images/person3.webp";
import portCard1 from "../assets/images/portfolio-images/card-1.png";
import portCard2 from "../assets/images/portfolio-images/card-2.png";
import portCard3 from "../assets/images/portfolio-images/card-3.png";
import portCard4 from "../assets/images/portfolio-images/card-4.png";
import portCard5 from "../assets/images/portfolio-images/card-5.png";
import portCard6 from "../assets/images/portfolio-images/card-6.png";

import blogImg1 from "../assets/images/blog/blog-1.jpg";
import blogImg2 from "../assets/images/blog/blog-2.jpg";
import blogImg3 from "../assets/images/blog/blog-3.jpg";
import blogImg4 from "../assets/images/blog/blog-4.jpg";
import resumePdf from "../assets/files/Resume.pdf";

export const LINKEDIN_URL = "https://www.linkedin.com/in/vijay-katariya-610761277/";

export const site = {
  title: "Vijay Katariya | Mobile App Developer in Surat | Flutter Developer",
  brandName: "Vijay Katariya",
  /** Navbar subtitle under name (reference-style, uppercase) */
  navSubtitle: "MOBILE APP DEVELOPER",
  locationLine: "Surat, Gujarat, India",
  footerCopyrightName: "Vijay Katariya",
  metaDescription:
    "Mobile App Developer in Surat specializing in Flutter, Android & iOS apps. Hire for scalable mobile applications, API integration, and modern UI/UX.",
  metaKeywords:
    "Mobile App Developer Surat, Flutter Developer India, Android Developer, iOS Developer, API Integration, Freelance Developer",
};

export const images = {
  hero: heroPortrait,
  heroAlt: "Vijay Katariya",
};

/** Hero — Brijesh-style: rotating roles + headline + markdown-style bio */
export const heroSection = {
  aboutLabel: "About",
  helloPrefix: "Hello! I'm",
  rotatingRoles: ["Mobile App Developer", "Flutter Developer", "API Integration Specialist"],
  headline: "Empowering Mobile Excellence",
  cardTagline: "MOBILE APP DEVELOPER",
  /** Use **double asterisks** for bold segments (rendered as strong) */
  bioParagraphsMd: [
    "I'm a **Mobile App Developer** at **Brainfleck Solution** in Surat, specializing in **Flutter** for **Android & iOS**. I hold an **MCA from Parul University** and a **BCA from MKBU**, giving me a solid foundation in software architecture and **REST API integration**.",
    "From concept to deployment, I focus on delivering **smooth UI/UX**, scalable **Firebase** backends, and clean code to turn product ideas into high-performance digital solutions."
  ],
};

/** Stats row under hero copy */
export const introduction = {
  name: "Vijay Katariya",
  ctaEmail: "katariyavijay1825@gmail.com",
  ctaLabel: "Hire Me",
  stats: [
    { id: 1, title: "Months Experience", description: "6+" },
    { id: 2, title: "Completed Projects", description: "5+" },
    { id: 3, title: "For Freelance Work", description: "Available" },
  ],
};

export const profile = {
  headline: "Flutter Developer India · Android & iOS · API integration",
  paragraphs: [
    "MCA at Parul University, Vadodara (2025–2027); BCA from MKBU, Bhavnagar (2022–2025). I ship Flutter apps with REST APIs, Firebase, and performance-minded UI for businesses in Surat and remote clients across India.",
    "Mobile Application Developer at Brainfleck Solution (Jan 2026–present). I focus on scalable mobile architecture, secure API integration, and hire-ready delivery — available as a freelance app developer or for full-time roles.",
  ],
  projectsHref: "#portfolio",
  projectsLabel: "View projects",
  cvHref: resumePdf,
  cvLabel: "Resume",
};

export const educationSection = {
  sectionKicker: "Resume",
  title: "Education & Experience",
  cvLabel: "View My CV",
  cvHref: resumePdf,
  linkedinUrl: LINKEDIN_URL,
  /** designation (title), place (school), time (period) only */
  items: [
    {
      id: "mobile-dev",
      title: "Mobile Application Developer",
      period: "Jan 2026 – Present",
      school: "Brainfleck Solution, Surat, Gujarat",
    },
    {
      id: "web-intern",
      title: "Web Development Intern",
      period: "2025",
      school: "Brainfleck Solution, Surat, Gujarat",
    },
    {
      id: "mca",
      title: "Master of Computer Applications (MCA)",
      period: "2025 – 2027",
      school: "Parul University, Vadodara",
    },
    {
      id: "bca",
      title: "Bachelor of Computer Applications (BCA)",
      period: "2022 – 2025",
      school: "MKBU, Bhavnagar",
    },
  ],
};

export const portfolioSection = {
  sectionKicker: "Portfolio",
  title: "Latest Projects",
  subtitle:
    "Flutter mobile apps with API integration, Firebase, and modern UI — Android & iOS from Surat, India.",
  moreProjectsHref: "/projects",
  moreProjectsLabel: "View All Projects",
  /** Show this many cards in the home preview (rest via View All) */
  previewCount: 2,
  projects: [
    {
      id: "productivity-suite",
      image: portCard1,
      category: "FLUTTER",
      title: "Productivity Suite – Flutter Mobile App",
      description: "A cross-platform mobile application developed using Flutter with API integration, real-time data handling, and modern UI design.",
      longDescription: "The Productivity Suite is a comprehensive mobile solution designed to streamline daily tasks for professionals. It leverages Flutter's high-performance rendering engine to provide a smooth, native-like experience on both Android and iOS. The app features a robust offline-first architecture, ensuring users can stay productive even without an active internet connection.",
      technologies: "Flutter, REST API, Firebase, SQLite",
      features: [
        "Real-time task synchronization across devices",
        "Advanced notification system using Firebase Cloud Messaging",
        "Offline data persistence with SQLite",
        "Custom interactive charts for productivity analytics",
        "Biometric authentication (Fingerprint & Face ID)"
      ],
      link: "/project/productivity-suite",
    },
    {
      id: "field-service-app",
      image: portCard2,
      category: "FLUTTER",
      title: "Field Service App – Flutter Mobile App",
      description: "A cross-platform mobile application developed using Flutter with API integration, real-time data handling, and modern UI design.",
      longDescription: "Designed for on-the-go professionals, the Field Service App simplifies job management, tracking, and reporting. It allows field agents to receive job assignments, update status in real-time, and capture proof of work via photos and digital signatures. The app integrates deeply with GPS services for efficient route planning and location tracking.",
      technologies: "Flutter, Google Maps API, Firebase, Node.js",
      features: [
        "Dynamic route optimization with Google Maps",
        "Real-time location tracking for field agents",
        "Digital signature capture for job completion",
        "Automated PDF report generation",
        "Push notifications for new job assignments"
      ],
      link: "/project/field-service-app",
    },
    {
      id: "client-portal",
      image: portCard3,
      category: "FLUTTER",
      title: "Client Portal – Flutter Mobile App",
      description: "A cross-platform mobile application developed using Flutter with API integration, real-time data handling, and modern UI design.",
      longDescription: "The Client Portal app provides a secure and seamless way for businesses to interact with their clients. From viewing project progress to managing invoices and support tickets, everything is accessible in one place. The app focuses heavily on security, implementing industry-standard encryption for all data transmissions.",
      technologies: "Flutter, Stripe API, Firebase Auth, Cloud Firestore",
      features: [
        "Secure document sharing and viewing",
        "Integrated payment gateway for invoice settlement",
        "Real-time support ticket management",
        "Project milestone tracking with progress bars",
        "Encrypted chat for direct communication"
      ],
      link: "/project/client-portal",
    },
    {
      id: "analytics-dashboard",
      image: portCard4,
      category: "FLUTTER",
      title: "Analytics Dashboard – Flutter Mobile App",
      description: "A cross-platform mobile application developed using Flutter with API integration, real-time data handling, and modern UI design.",
      longDescription: "This app brings powerful business intelligence to your pocket. It connects to various data sources and provides real-time visualizations of key performance indicators. The dashboard is highly customizable, allowing users to choose the metrics that matter most to them and set up alerts for specific data thresholds.",
      technologies: "Flutter, Chart.js (via Webview), REST API, AWS",
      features: [
        "Real-time data visualization with interactive charts",
        "Customizable dashboard layouts",
        "Threshold-based push alerts",
        "Multi-source data integration",
        "Exportable data reports in CSV and PDF"
      ],
      link: "/project/analytics-dashboard",
    },
    {
      id: "commerce-companion",
      image: portCard5,
      category: "FLUTTER",
      title: "Commerce Companion – Flutter Mobile App",
      description: "A cross-platform mobile application developed using Flutter with API integration, real-time data handling, and modern UI design.",
      longDescription: "Commerce Companion is an all-in-one tool for e-commerce store owners. It provides real-time sales tracking, inventory management, and customer relationship management. The app integrates with popular e-commerce platforms to provide a unified view of the business across all sales channels.",
      technologies: "Flutter, Shopify API, WooCommerce API, Firebase",
      features: [
        "Real-time sales and order tracking",
        "Inventory management with barcode scanning",
        "Customer profile and order history viewing",
        "Promotional campaign management",
        "Integrated analytics for sales trends"
      ],
      link: "/project/commerce-companion",
    },
    {
      id: "community-app",
      image: portCard6,
      category: "FLUTTER",
      title: "Community App – Flutter Mobile App",
      description: "A cross-platform mobile application developed using Flutter with API integration, real-time data handling, and modern UI design.",
      longDescription: "The Community App is designed to foster engagement and connection within groups. Whether it's a neighborhood, a professional organization, or a hobbyist group, the app provides tools for communication, event planning, and resource sharing. It emphasizes user privacy and community moderation.",
      technologies: "Flutter, Firebase Realtime Database, Cloud Functions",
      features: [
        "Group messaging and forum discussions",
        "Event calendar with RSVP functionality",
        "Member directory with privacy controls",
        "Resource sharing (files, photos, links)",
        "Admin tools for community moderation"
      ],
      link: "/project/community-app",
    },
  ],
};

export const blogSection = {
  sectionKicker: "Blog",
  title: "Latest Insights",
  subtitle:
    "Flutter, API integration, and mobile performance — practical notes for builders and hiring teams.",
  viewAllHref: "/blogs",
  viewAllLabel: "View All Blogs",
  previewCount: 2,
  posts: [
    {
      id: 1,
      image: blogImg1,
      date: "1 Jan, 2026",
      comments: 0,
      category: "Flutter & APIs",
      title: "How to Build a Flutter App with API Integration",
      link: "/blog/flutter-api-integration",
      bodyParagraphs: [
        "API integration in Flutter succeeds when you treat contracts as seriously as widgets: schemas, versioning, timeouts, and error shapes should be predictable before you animate a single loading state.",
        "A small dedicated client layer (for example Dio with interceptors) keeps auth tokens, retries, and logging out of your UI code. Parsing JSON into typed models—by hand or with codegen—helps catch breakage when the backend evolves.",
        "Expose explicit UI states for loading, offline, validation errors, and server errors. Combine that with pagination and pull-to-refresh so users retain trust when connectivity is flaky.",
        "Agree with backend on versioning and environments early. OpenAPI—or even a thin shared changelog—dramatically lowers integration risk as your product roadmap grows.",
      ],
    },
    {
      id: 2,
      image: blogImg2,
      date: "15 Jan, 2026",
      comments: 0,
      category: "Performance",
      title: "Best Practices for Mobile App Performance Optimization",
      link: "/blog/mobile-performance",
      bodyParagraphs: [
        "Measure on real hardware: emulator smoothness rarely survives budget Android devices or aging iPhones.",
        "List performance dominates many apps—use bounded rebuilds with keys, lazy loading, image caching at the right resolutions, and avoid heavy work on the UI isolate.",
        "Startup time matters for retention: defer non-critical initialization, splash should hand off quickly, and keep your first meaningful frame lean.",
        "Profile systematically: Flutter DevTools timeline for jank, size analysis for APK/IPA creep, and network waterfalls for sluggish screens driven by chatter with APIs.",
      ],
    },
    {
      id: 3,
      image: blogImg3,
      date: "1 Feb, 2026",
      comments: 0,
      category: "Strategy",
      title: "Flutter vs Native Development: Which is Better?",
      link: "/blog/flutter-vs-native",
      bodyParagraphs: [
        "There is no universal winner—Flutter shines for shared UI and iteration speed across Android and iOS; native excels when platform-only APIs or extreme OS fidelity dominate the backlog.",
        "Team skills and timelines matter more than zealotry. A strong Flutter codebase with solid architecture will beat a mediocre native codebase and vice versa.",
        "Hybrid stacks still need native expertise for store policies, certificates, notifications edge cases, and occasional platform channels.",
        "Choose Flutter when cross-platform parity, branded UI, and cost-effective maintenance are primary; lean native when a single platform or OS-specific surface is the entire product.",
      ],
    },
    {
      id: 4,
      image: blogImg4,
      date: "20 Feb, 2026",
      comments: 0,
      category: "Security",
      title: "REST APIs for Flutter: Secure integration patterns",
      link: "/blog/flutter-rest-api",
      bodyParagraphs: [
        "Never bake long-lived secrets into client builds; use short-lived access tokens refreshed via secure backends and HTTPS-only transports.",
        "Pin critical flows: certificate issues are rare but impactful—understand MITM assumptions for your threat model.",
        "Store tokens with platform keystores via battle-tested plugins; isolate refresh logic so a 401 cascades cleanly to re-auth UX rather than mystery failures.",
        "Log safely in staging, strip PII and tokens in release builds, and design rate limits/timeouts client-side so a flaky API cannot wedged the UI.",
      ],
    },
    {
      id: 5,
      image: blogImg2,
      date: "1 Mar, 2026",
      comments: 0,
      category: "Hiring",
      title: "Hire a Mobile App Developer: What to look for in India",
      link: "/blog/hiring-mobile-developer",
      bodyParagraphs: [
        "Look for shipped apps with attributable roles—portfolio links or store listings—not only course certificates.",
        "Ask how candidates handle regressions after release: hotfix discipline, versioning, phased rollouts, and monitoring.",
        "Probe API collaboration: pagination, versioning, retries, optimistic UI, offline behavior reveal seniority.",
        "Communication and timezone overlap often predict delivery more than pedigree alone—especially on remote engagements.",
      ],
    },
    {
      id: 6,
      image: blogImg1,
      date: "15 Mar, 2026",
      comments: 0,
      category: "Release",
      title: "Android & iOS release checklist for Flutter apps",
      link: "/blog/release-checklist",
      bodyParagraphs: [
        "Bump versionName/versionCode or CFBundle versioning consistently so stores and testers can correlate crashes.",
        "Validate permissions strings, icons, screenshots, signing keys, and privacy nutrition labels—or Play Data safety—before submitting.",
        "Run release builds with obfuscation/profile flags your team adopts; smoke test install sizes and cold starts from store-equivalent binaries.",
        "Plan rollback: phased rollout percentages, staged country launches, and a simple incident playbook for regressions spotted in production telemetry.",
      ],
    },
  ],
};

export const workProcess = {
  intro: [
    "Discovery → structure → build → launch. Same discipline for mobile apps, APIs, and shipping to the stores.",
    "Performance, security, and maintainability — so your next feature doesn’t become tech debt.",
  ],
  steps: [
    {
      id: 1,
      title: "Research",
      description: "Goals, users, platforms, and constraints.",
    },
    {
      id: 2,
      title: "Architecture",
      description: "Sitemap, APIs, plugins, and milestones.",
    },
    {
      id: 3,
      title: "Build",
      description: "UI, integrations, payments, analytics hooks.",
    },
    {
      id: 4,
      title: "Ship",
      description: "Deploy, monitor, iterate.",
    },
  ],
};

export const happyClientsSection = {
  title: "Collaborators",
  subtitle: "Ecosystems and platforms commonly integrated alongside Flutter clients — APIs, analytics, auth, and cloud.",
};

export const testimonialsSection = {
  title: "Testimonials",
  items: [
    {
      message: "Client Feedback",
      quote: "Working with Vijay was a great experience. The attention to detail and performance of the app were exceptional.",
      name: "Anonymous",
      designation: "Product Manager",
    },
  ],
};

export const workTogether = {
  title: "Let’s Build Your Next Mobile App 🚀",
  subtitle:
    "Looking for a Mobile App Developer in India? I’m available for freelance and full-time opportunities. Let’s discuss your project.",
  ctaLabel: "Let’s talk",
  ctaHref: "/contact",
};

export const professionSection = {
  sectionKicker: "Services",
  title: "Mobile & Flutter Solutions That Deliver Performance & Growth",
  intro: [
    "End-to-end mobile delivery: from Flutter clients and API integration to polished UI and store-ready builds — tuned for performance and growth.",
  ],
  ctaLabel: "Hire Me",
  roles: [
    {
      id: 1,
      title: "Mobile App Development & Cross-Platform Delivery",
      description:
        "I build production-ready Android and iOS apps with Flutter — navigation, state management, offline-aware patterns, push notifications, secure storage, and App Store / Play Store release hygiene. Integrations include REST, Firebase, and third-party SDKs with clean architecture and testable modules.",
    },
    {
      id: 2,
      title: "API Integration & Backend Connectivity",
      description:
        "Robust client-side API layers: auth tokens, error handling, pagination, caching, and realtime updates where needed. I collaborate on contract design so mobile, web, and backend teams stay aligned and shipping stays predictable.",
    },
    {
      id: 3,
      title: "UI/UX, Performance & Quality",
      description:
        "Responsive layouts, accessible components, animations where they add value, and profiling for jank-free scrolling. I optimize build size, startup time, and battery use so your app feels fast on real devices — not just emulators.",
    },
    {
      id: 4,
      title: "Websites, E‑commerce & Product Surfaces",
      description:
        "Landing pages and marketing sites with HTML, CSS, and JavaScript frameworks when the scope includes web. For commerce, I integrate secure payments, catalog flows, and admin-friendly patterns alongside your mobile roadmap.",
    },
  ],
};

export const newsletterSection = {
  kicker: "Updates Together",
  buttonLabel: "Subscribe Now",
};

export const contactSection = {
  title: "Let’s build your next release",
  subtitle: "Email: katariyavijay1825@gmail.com — I reply within 1–2 business days.",
  formIntro: "Prefer form? Drop details below or mail me directly.",
  addressItems: [
    {
      icon: faLocationDot,
      title: "Location",
      description: "Surat, Gujarat, India",
    },
    {
      icon: faEnvelope,
      title: "Email",
      description: "katariyavijay1825@gmail.com",
    },
  ],
};

export const socialLinks = [
  { id: "linkedin", url: LINKEDIN_URL },
  { id: "twitter", url: "https://x.com/katariyavijay1825" }
];
