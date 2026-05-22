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
      id: "brainbite",
      image: portCard1,
      category: "MOBILE APP / AI",
      title: "BrainBite: Daily Fun Facts & AI Trivia",
      description: "An AI-powered mobile app designed to make learning engaging and fun with personalized daily bite-sized facts and trivia.",
      longDescription: "BrainBite is a professionally developed AI-powered mobile application designed to make learning fun, interactive, and engaging through daily bite-sized facts. Users can explore interesting facts across multiple categories, save favorites, create collections, and receive personalized daily reminders. The app focuses on creating a modern learning experience with smooth UI/UX, dynamic content, and AI-driven fact generation. Developed and launched professionally during my employment at Brainfleck Solution.",
      technologies: "Flutter, Dart, Firebase, Laravel API, REST APIs, Firebase Authentication, Firebase Cloud Messaging, Reusable Widget Architecture",
      features: [
        "AI-powered fact generation: Delivers dynamic, interesting facts automatically.",
        "Category-based exploration: Browse across Science, History, Space, Nature, Technology, Psychology, and more.",
        "Google Sign-In Authentication: Secure and seamless onboarding flow.",
        "Custom collections & favorites: Save and organize your favorite bite-sized knowledge cards.",
        "Daily smart reminder notifications: Engaging push notifications to build a daily learning habit.",
        "Background sound mode & modern UI: Sleek transitions, clean cards, and immersive audio experience."
      ],
      link: "/project/brainbite",
      liveLink: "https://play.google.com/store/apps/details?id=com.bfs.brainbite",
      companyProject: true,
      companyName: "Brainfleck Solution",
    },
    {
      id: "taxtracker",
      image: portCard2,
      category: "MOBILE APP / FINANCE",
      title: "TaxTracker: Expense & Mileage Tracker",
      description: "A smart finance and tax management mobile app designed for freelancers, self-employed professionals, and small businesses to log expenses and estimate deductions.",
      longDescription: "TaxTracker is a professionally developed smart finance and tax management mobile application designed for freelancers, self-employed professionals, gig workers, and small business owners. The app helps users track expenses, scan receipts, log mileage, estimate taxes, and organize deductions in one simple platform. It provides an easy and efficient way to manage business finances, reduce manual work, and stay prepared for tax filing. Developed and launched professionally during my employment at Brainfleck Solution.",
      technologies: "Flutter, Dart, Firebase, Laravel API, REST APIs, Firebase Authentication, Push Notifications, Reusable Widget Architecture",
      features: [
        "AI-Powered Receipt Scanner: Instant scanning and digitizing of business receipts.",
        "Expense Tracker: Auto-categorize expenses and monitor personal/business finances.",
        "Mileage Tracker: Track drives with IRS rate calculations for maximum deductions.",
        "Tax Estimator: Calculate quarterly estimated taxes dynamically based on current bracket.",
        "Reports & Analytics: Export detailed PDF and CSV files for tax advisors and bookkeeping.",
        "Cloud Data Sync & Offline support: Robust real-time sync with offline-first tracking."
      ],
      link: "/project/taxtracker",
      liveLink: "https://play.google.com/store/apps/details?id=com.bfs.taxtracker",
      companyProject: true,
      companyName: "Brainfleck Solution",
    },
    {
      id: "plankworkout",
      image: portCard3,
      category: "MOBILE APP / FITNESS",
      title: "ProPlank: AI Plank Workout & Timer",
      description: "An AI-powered fitness app designed to help users build core strength with posture detection, guided challenges, and gamified streak tracking.",
      longDescription: "ProPlank is a professionally developed AI-powered fitness mobile application designed to help users improve their core strength through smart plank workouts, posture tracking, and guided fitness challenges. The app combines AI posture detection, workout gamification, progress tracking, and structured plank challenge programs to create an engaging fitness experience. It helps users maintain proper plank form, stay consistent with workouts, and track their fitness progress effectively. Developed and launched professionally during my employment at Brainfleck Solution.",
      technologies: "Flutter, Dart, Firebase, Laravel API, REST APIs, Firebase Authentication, Camera & Motion Detection, Reusable Widget Architecture",
      features: [
        "AI Posture Detection: Real-time camera tracking and feedback to ensure correct plank posture.",
        "Structured 30-Day Challenges: Multi-tier guided challenge courses to systematically increase core strength.",
        "Smart Plank Timer: Custom intervals, ambient sounds, and professional voice coaching.",
        "Gamified Achievements: Earn XP, badges, daily goals, and maintain active workout streaks.",
        "Cloud Sync & Secure backup: Cloud storage support via Google Drive backups for local data.",
        "Diet Plan Support: Tailored nutritional guides complementing your core fitness routines."
      ],
      link: "/project/plankworkout",
      liveLink: "https://play.google.com/store/apps/details?id=com.bfs.plankworkout.planktimer.fitnessapp.plankexercises",
      companyProject: true,
      companyName: "Brainfleck Solution",
    },
    {
      id: "gujarati-panchang",
      image: portCard4,
      category: "MOBILE APP / LIFESTYLE",
      title: "Panchang Guru: Smart Gujarati Calendar",
      description: "A beautifully designed Gujarati Panchang and Calendar app for 2025-2026 to track daily Choghadiya, auspicious Muhurat, and festivals.",
      longDescription: "Panchang Guru is a professionally developed smart Gujarati Panchang and Calendar mobile application for 2025-2026 designed specifically for the Gujarati community worldwide. The app helps users track daily Choghadiya, detailed Tithi, and upcoming festivals with ease and high precision. Using accurate astronomical algorithms to calculate timings, it acts as the ultimate daily companion for tracking Panchang, Muhurat, and spiritual Vrat Kathas. Developed and launched professionally during my employment at Brainfleck Solution.",
      technologies: "Flutter, Localized DB, Push Notifications, Custom Astronomical Algorithms, Dart, Reusable Widget Architecture",
      features: [
        "Complete Gujarati Calendar: Grid-based visual guide to all 2025-2026 dates, traditional festivals, and holidays.",
        "Real-time Choghadiya: Accurate Day & Night Choghadiya (Amrut, Shubh, Labh) tailored to your exact geographical location.",
        "Daily Panchang & Tithi details: Rich astrological data spanning Paksha, Nakshatra, Yoga, and Karana.",
        "Vrat & Festival Alerts: Automatic notifications for key traditional occurrences like Ekadashi, Poonam, and Amas.",
        "Spiritual Library: Handheld archive of daily Aartis, spiritual Chalisa, Stuti, and traditional Vrat Kathas.",
        "Precision Algorithms & Offline mode: Built using high-precision calculations with complete offline support."
      ],
      link: "/project/gujarati-panchang",
      liveLink: "https://play.google.com/store/apps/details?id=com.bfs.panchangguru",
      companyProject: true,
      companyName: "Brainfleck Solution",
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
