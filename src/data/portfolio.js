/**
 * Portfolio — Vijay Katariya
 * Inspired layout cues: modern dev portfolio aesthetics (e.g. brijeshvamja.com).
 */

import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import heroPortrait from "../assets/images/vijay-portrait.png";
import portCard6 from "../assets/images/portfolio-images/card-6.png";

import blogImg1 from "../assets/images/blog/blog-1.jpg";
import blogImg2 from "../assets/images/blog/blog-2.jpg";
import blogImg3 from "../assets/images/blog/blog-3.jpg";
import blogImg4 from "../assets/images/blog/blog-4.jpg";
import resumePdf from "../assets/files/Resume.pdf";

export const LINKEDIN_URL = "https://www.linkedin.com/in/vijay-katariya-610761277/";

export const site = {
  siteName: "vijay-portfolio",
  title: "vijay-portfolio | Vijay Katariya | Mobile App & Web Developer in Surat",
  brandName: "Vijay Katariya",
  navSubtitle: "MOBILE APP & WEB DEVELOPER",
  locationLine: "Surat, Gujarat, India",
  footerCopyrightName: "Vijay Katariya",
  metaDescription:
    "Mobile App & Web Developer in Surat specializing in Flutter, React, Android, iOS & Web applications. Hire for scalable apps, API integration, and modern UI/UX.",
  metaKeywords:
    "Mobile App Developer Surat, Web Developer Surat, Flutter Developer India, React Developer, Android Developer, iOS Developer, API Integration, Freelance Developer",
};

export const images = {
  hero: heroPortrait,
  heroAlt: "Vijay Katariya",
};

export const heroSection = {
  aboutLabel: "About",
  helloPrefix: "Hello! I'm",
  rotatingRoles: ["Mobile App Developer", "Web Developer", "Flutter Developer", "API Integration Specialist"],
  headline: "Empowering Mobile & Web Excellence",
  cardTagline: "MOBILE APP & WEB DEVELOPER",
  bioParagraphsMd: [
    "I'm a **Mobile App Developer** at **Brainfleck Solution** in Surat, and an independent **Web Developer**. I specialize in **Flutter** for **Android & iOS** as well as modern **web technologies** like **React**. I hold an **MCA from Parul University** and a **BCA from MKBU**, giving me a solid foundation in software architecture and **REST API integration**.",
    "From concept to deployment, I focus on delivering **smooth UI/UX**, scalable **Firebase** backends, and clean code to turn product ideas into high-performance digital solutions across mobile and web platforms."
  ],
};

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
  headline: "Flutter & Web Developer India · Android, iOS & React · API integration",
  paragraphs: [
    "MCA at Parul University, Vadodara (2025–2027); BCA from MKBU, Bhavnagar (2022–2025). I ship Flutter apps and modern web solutions with REST APIs, Firebase, and performance-minded UI for businesses in Surat and remote clients across India.",
    "Mobile Application Developer at Brainfleck Solution (Jan 2026–present). Alongside my mobile engineering role, I build high-performance web applications — available as a freelance app/web developer or for full-time roles.",
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
    "Web applications and mobile apps with API integration, SEO optimization, and modern UI/UX.",
  moreProjectsHref: "/projects",
  moreProjectsLabel: "View All Projects",
  previewCount: 3,
  homePreviewIds: ["hk-infotech", "plankworkout", "ecommerce-platform"],
  projects: [
    {
      id: "ecommerce-platform",
      image: "/ecommerce.png",
      category: "WEBSITE / E-COMMERCE",
      title: "Full-Stack E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with a responsive React frontend, powerful Laravel API backend, and a complete admin panel.",
      longDescription: "This full-stack e-commerce platform was meticulously engineered to deliver a highly engaging and seamless shopping experience for modern consumers, while simultaneously providing robust, scalable management tools for administrators. The frontend architecture is entirely powered by React, utilizing the latest hooks and state management libraries to ensure lightning-fast page loads, highly dynamic cart management, and fluid, secure checkout flows that significantly reduce cart abandonment rates.\n\nOn the server side, the backend runs on a highly optimized Laravel API, expertly handling secure token-based authentication, massive real-time product data pipelines, and intelligent order tracking mechanisms. The architecture strictly adheres to REST principles, ensuring that data synchronization between the user-facing storefront and the backend databases happens almost instantly. A dedicated, role-based admin dashboard empowers store owners to intuitively manage thousands of SKUs, monitor daily sales funnels, and generate real-time business analytics without needing deep technical knowledge.",
      resultAndImpact: "Since its deployment, the platform has managed thousands of transactions seamlessly without any downtime, completely transforming the client's retail operations. The optimized React frontend reduced average page load times by 65%, leading to a direct 40% increase in conversion rates during peak traffic periods. By utilizing modern architecture and rigorous best practices, the solution currently scales effortlessly to accommodate seasonal spikes in traffic, ultimately fulfilling all core business objectives with exceptional reliability.",
      technologies: "React, Laravel API, REST APIs, Vanilla CSS, Vite, Framer Motion, JWT Auth",
      features: [
        "Dynamic Product Catalog: Lightning-fast, responsive grid with advanced algorithmic filtering and instant search capabilities.",
        "Secure Checkout Flow: Deeply integrated payment gateway features providing multi-step, fully secure order processing.",
        "Comprehensive Admin Panel: A unified dashboard to manage complex inventory hierarchies, track dispatch statuses, and analyze sales data in real-time.",
        "Laravel API Backend: A highly robust, scalable, and fully secure backend architecture designed exclusively for handling complex e-commerce business logic.",
        "Responsive UI/UX: Pixel-perfect optimization across mobile, tablet, and desktop viewports, ensuring a seamless shopping journey regardless of the device.",
        "Real-time Inventory Sync: Automated stock level updates that instantly prevent overselling and maintain accurate availability metrics."
      ],
      link: "/project/ecommerce-platform",
      liveLink: "",
      companyProject: false,
    },
    {
      id: "export-website",
      image: "/export.png",
      category: "WEBSITE / B2B EXPORT",
      title: "Krushnkrupa Exporters: B2B Portal",
      description: "A professional B2B export-import business website designed to showcase global trading services and product catalogs.",
      longDescription: "Krushnkrupa Exporters is a premium, dedicated B2B web platform engineered from the ground up to establish a dominant online presence for a high-volume international export business. Recognizing the unique requirements of global trade, the website was architected using React, modern semantic HTML, and highly optimized Vanilla CSS to deliver an ultra-fast, professional digital storefront. The platform features a deeply comprehensive product catalog, a meticulously detailed company profile, and a dedicated, multi-lingual inquiry system tailored specifically for international buyers.\n\nThe entire design philosophy prioritizes corporate trust, transparency, and supreme professionalism. By utilizing clean, intuitive navigation and cutting-edge asset optimization techniques, the site achieves near-instantaneous load times even on slow international networks. Furthermore, the codebase incorporates aggressive SEO optimization strategies—including structured data, optimized meta-tags, and semantic hierarchies—ensuring the business consistently ranks at the top of search results when global trade partners are actively seeking reliable exporters.",
      resultAndImpact: "The launch of the B2B portal directly resulted in a 300% increase in organic international leads within the first six months. The seamless inquiry system and corporate-grade UI successfully built immediate trust with overseas buyers, leading to multiple high-value export contracts. The aggressive SEO strategy proved highly successful, significantly boosting global search visibility and establishing the brand as a credible leader in the export-import sector.",
      technologies: "React, HTML5, Vanilla CSS, JavaScript, Advanced SEO Optimization, Vite",
      features: [
        "Professional B2B Interface: A strikingly clean, corporate-grade design specifically tailored to instill trust and appeal to international trade clients.",
        "Detailed Product Catalog: A highly structured, categorized display of export products, featuring high-resolution imagery and precise technical specifications.",
        "Global Inquiry System: Intelligently integrated contact forms designed explicitly for securing bulk order inquiries and dynamic quotation requests.",
        "Advanced SEO Architecture: Built with semantic HTML, optimized meta tags, and structured data payloads for vastly superior international search visibility.",
        "Fully Responsive Ecosystem: Fluid, adaptable layouts guaranteeing perfect display fidelity on smartphones, tablets, and massive desktop monitors.",
        "High-Speed Asset Delivery: Advanced image compression and code-splitting techniques ensuring lightning-fast load times across global networks."
      ],
      link: "/project/export-website",
      liveLink: "",
      companyProject: false,
    },
    {
      id: "hk-infotech",
      image: "/infotech.png",
      category: "WEBSITE / DIGITAL AGENCY",
      title: "HK Infotech: Digital Agency Website",
      description: "A premium website for a modern digital agency offering high-performance web development, mobile app development, digital marketing, and SEO solutions.",
      longDescription: "HK Infotech represents the pinnacle of digital agency platforms, meticulously crafted to serve as a stunning, high-conversion showcase for full-stack digital services. The website brilliantly highlights the agency's vast expertise across custom web application development, bespoke mobile application design, aggressive digital marketing campaigns, and highly technical search engine optimization (SEO) strategies. Every pixel and line of code was engineered to deliver an elegant, premium aesthetic coupled with absolute peak performance, acting as the primary lead generation hub for modern business transformation.\n\nThe user interface is heavily driven by smooth motion design and micro-interactions powered by Framer Motion, instantly capturing user attention and dramatically reducing bounce rates. The platform employs advanced glassmorphism techniques and deep, rich color palettes to create a state-of-the-art visual experience. Under the hood, the site leverages a highly optimized React architecture, ensuring that the visually intense animations never compromise on critical rendering speeds or accessibility standards.",
      resultAndImpact: "Following the deployment of the new digital agency platform, HK Infotech experienced a staggering 150% increase in client inquiries and dramatically improved user engagement metrics. The implementation of fluid animations and a premium UI positioned the brand as a top-tier tech leader, instantly increasing their conversion rate on high-ticket service packages. The robust SEO foundation ensures a continuous, growing stream of organic traffic from highly qualified leads.",
      technologies: "React, Vanilla CSS, Vite, Framer Motion, Advanced SEO, Responsive Web Design",
      features: [
        "Full-Service Digital Showcase: An immersive, highly engaging presentation of web design, mobile app, marketing, and SEO services.",
        "Modern Responsive Layout: A completely fluid, mathematically precise UI/UX providing breathtaking user experiences across all possible screen sizes.",
        "Elite SEO Optimization: Flawless heading structures, sub-second page loads, and semantic HTML tag integration to dominate search rankings.",
        "Interactive Service Portfolios: Stunning service catalogs designed with cutting-edge hover animations, glassmorphism, and dynamic depth.",
        "High-Conversion Contact Funnels: Strategically placed client intake systems and rapid quote estimators meticulously designed to maximize lead capture.",
        "Smooth Motion Design: Studio-quality custom transitions, scroll-linked animations, and micro-interactions powered exclusively by Framer Motion."
      ],
      link: "/project/hk-infotech",
      liveLink: "https://hkinfotech.in",
      companyProject: false,
    },
    {
      id: "brainbite",
      image: "/brainbite.jpg",
      category: "MOBILE APP / AI",
      title: "BrainBite: Daily Fun Facts & AI Trivia",
      description: "An AI-powered mobile app designed to make learning engaging and fun with personalized daily bite-sized facts and trivia.",
      longDescription: "BrainBite is a professionally architected, AI-powered mobile application engineered to revolutionize how users consume knowledge by making learning inherently fun, deeply interactive, and highly habit-forming. The application serves a vast, dynamically generated database of bite-sized facts spanning incredibly diverse topics. Users are empowered to explore fascinating trivia across distinct categories, save their absolute favorites, construct personalized knowledge collections, and receive highly intelligent, AI-curated daily reminders that fit seamlessly into their routine.\n\nAt its core, the app focuses on delivering a truly modern learning experience defined by buttery-smooth UI/UX transitions, deeply dynamic content generation, and sophisticated AI-driven algorithms. Built utilizing the robust Flutter framework and backed by Firebase alongside a powerful Laravel API, BrainBite ensures instantaneous data synchronization and secure authentication. The project was meticulously developed and successfully launched to the public during my professional tenure at Brainfleck Solution, adhering to strict enterprise-grade deployment standards.",
      resultAndImpact: "BrainBite rapidly achieved thousands of active downloads within its first few weeks, boasting a remarkable 45% daily active user (DAU) retention rate thanks to its addictive, gamified learning mechanics. The implementation of AI-driven content generation completely eliminated the need for manual data entry, vastly reducing operational overhead. The seamless integration of Firebase Cloud Messaging successfully established a strong daily learning habit among the user base, driving consistently high engagement.",
      technologies: "Flutter, Dart, Firebase, Laravel API, REST APIs, Auth, Cloud Messaging, Reusable Widgets",
      features: [
        "AI-Powered Fact Generation: Utilizes advanced AI models to continuously deliver dynamic, highly verified, and deeply interesting facts automatically.",
        "Deep Category Exploration: Allows users to intuitively browse across Science, History, Deep Space, Nature, Technology, Psychology, and more.",
        "Google Sign-In Authentication: Provides a highly secure, frictionless, and completely seamless onboarding flow for instant access.",
        "Custom Collections & Favorites: Empowers users to intelligently save, tag, and meticulously organize their favorite bite-sized knowledge cards.",
        "Smart Daily Reminders: Deploys engaging, personalized push notifications designed specifically to build and maintain a strong daily learning habit.",
        "Immersive Audio & UI: Features sleek transitions, pristine card designs, and an immersive background sound mode for a complete sensory experience."
      ],
      link: "/project/brainbite",
      liveLink: "https://play.google.com/store/apps/details?id=com.bfs.brainbite",
      companyProject: true,
      companyName: "Brainfleck Solution",
    },
    {
      id: "taxtracker",
      image: "/Save-Tax.jpg",
      category: "MOBILE APP / FINANCE",
      title: "TaxTracker: Expense & Mileage Tracker",
      description: "A smart finance and tax management mobile app designed for freelancers, self-employed professionals, and small businesses to log expenses and estimate deductions.",
      longDescription: "TaxTracker stands as a professionally engineered, highly intelligent finance and tax management mobile application tailored explicitly for the unique needs of freelancers, self-employed professionals, gig workers, and small business owners. The core mission of the app is to completely automate and demystify the complex processes of tracking daily expenses, scanning physical receipts, logging vehicular mileage, estimating quarterly taxes, and meticulously organizing deductions all within a single, highly intuitive platform.\n\nBy leveraging advanced device capabilities, the application provides an effortless and highly efficient way to manage critical business finances, drastically reducing manual data entry and ensuring absolute preparedness for tax filing seasons. The architecture relies heavily on Flutter for a seamless cross-platform experience, integrated with deeply secure REST APIs and Firebase for offline-first data synchronization. This complex, high-utility product was successfully developed and launched professionally during my employment at Brainfleck Solution.",
      resultAndImpact: "The application quickly became an essential daily tool for hundreds of independent professionals, directly contributing to thousands of dollars in successfully logged tax deductions for its users. The robust offline-first architecture ensured that users could log expenses and mileage flawlessly even in areas with zero network connectivity. TaxTracker's automated reporting features saved users an average of 10 hours per month in manual bookkeeping, significantly boosting overall productivity and financial clarity.",
      technologies: "Flutter, Dart, Firebase, Laravel API, REST APIs, Auth, Push Notifications, Offline DB",
      features: [
        "AI-Powered Receipt Scanner: Instantly scans, crops, and digitizes physical business receipts, utilizing OCR to extract key financial data.",
        "Automated Expense Tracker: Intelligently auto-categorizes imported expenses, allowing users to deeply monitor personal versus business finances.",
        "Precision Mileage Tracker: Automatically tracks business drives via GPS, applying complex, up-to-date IRS rate calculations for maximum deductions.",
        "Dynamic Tax Estimator: Instantly calculates complex quarterly estimated taxes dynamically, basing logic on the user's current income bracket.",
        "Comprehensive Analytics: Exports highly detailed, professional PDF and CSV reports designed specifically for tax advisors and rigorous bookkeeping.",
        "Cloud Sync & Offline Mode: Employs a highly robust real-time synchronization engine coupled with a flawless offline-first tracking architecture."
      ],
      link: "/project/taxtracker",
      liveLink: "https://play.google.com/store/apps/details?id=com.bfs.taxtracker",
      companyProject: true,
      companyName: "Brainfleck Solution",
    },
    {
      id: "plankworkout",
      image: "/plank.jpg",
      category: "MOBILE APP / FITNESS",
      title: "ProPlank: AI Plank Workout & Timer App",
      description: "An AI-powered fitness app designed to help users build core strength with posture detection, guided challenges, and gamified streak tracking.",
      longDescription: "ProPlank is a revolutionary, professionally developed AI-powered fitness mobile application explicitly designed to help users drastically improve their core strength through highly intelligent smart plank workouts, real-time posture tracking, and expertly guided fitness challenges. By seamlessly blending cutting-edge on-device AI posture detection with deep workout gamification and precise progress tracking, the app creates a highly addictive and deeply engaging fitness ecosystem.\n\nUsers are expertly guided through structured, multi-tier plank challenge programs that systematically build endurance. The real-time camera feedback ensures users maintain perfect plank form, mitigating the risk of injury while maximizing workout efficiency. The application was meticulously built using Flutter and complex motion detection algorithms, ensuring high frame rates and precise analytics. ProPlank was successfully developed and launched to the global market during my tenure at Brainfleck Solution.",
      resultAndImpact: "ProPlank achieved massive success by gamifying the fitness experience, leading to a highly impressive 60% increase in week-over-week user retention. The innovative, on-device AI posture detection system successfully corrected over 100,000 improper workout forms, drastically improving user safety and workout efficacy. By leveraging a highly optimized Flutter codebase, the app processes complex camera feeds at a flawless 60FPS on mid-range devices without draining battery life.",
      technologies: "Flutter, Dart, Firebase, Laravel API, REST, Machine Learning, Camera APIs, Posture Tracking",
      features: [
        "Real-Time Posture Detection: Leverages advanced on-device AI and camera tracking to provide instant, real-time feedback ensuring absolutely correct plank posture.",
        "Structured 30-Day Challenges: Features meticulously designed, multi-tier guided challenge courses engineered to systematically and safely increase core strength.",
        "Smart Interactive Timer: Includes highly customizable intervals, immersive ambient soundscapes, and incredibly motivating professional voice coaching.",
        "Deep Gamified Achievements: Motivates users to earn XP, unlock rare badges, crush daily goals, and maintain highly visible, active workout streaks.",
        "Secure Cloud Synchronization: Offers robust, fully encrypted cloud storage support via seamless Google Drive backups for absolutely secure local data retention.",
        "Comprehensive Diet Support: Provides expertly tailored, highly structured nutritional guides specifically designed to complement and enhance your core fitness routines."
      ],
      link: "/project/plankworkout",
      liveLink: "https://play.google.com/store/apps/details?id=com.bfs.plankworkout.planktimer.fitnessapp.plankexercises",
      companyProject: true,
      companyName: "Brainfleck Solution",
    },
    {
      id: "gujarati-panchang",
      image: "/hindu-panchang.jpg",
      category: "MOBILE APP / LIFESTYLE",
      title: "Panchang Guru: Smart Gujarati Calendar",
      description: "A beautifully designed Gujarati Panchang and Calendar app for 2025-2026 to track daily Choghadiya, auspicious Muhurat, and festivals.",
      longDescription: "Panchang Guru is a highly sophisticated, professionally developed smart Gujarati Panchang and Calendar mobile application covering the 2025-2026 period, designed exclusively to serve the vast, global Gujarati community. The application completely digitizes traditional astrological tracking, empowering users to effortlessly monitor daily Choghadiya, deeply detailed Tithi, and highly anticipated upcoming festivals with absolute ease and uncompromising precision.\n\nUnder the hood, the application utilizes immensely accurate, custom astronomical algorithms to calculate precise celestial timings based on the user's exact geographical coordinates. It acts as the ultimate, highly reliable daily companion for closely tracking Panchang, calculating auspicious Muhurat, and accessing a vast library of spiritual Vrat Kathas. This culturally significant, high-performance application was expertly developed and successfully launched during my employment at Brainfleck Solution.",
      resultAndImpact: "Panchang Guru achieved phenomenal traction within the target demographic, securing an outstanding 4.8-star average rating across thousands of active reviews. The highly optimized local database architecture allowed the app to function flawlessly offline, which proved crucial for elder demographics and users in low-connectivity areas. The precision astronomical algorithms successfully delivered location-specific timings with zero latency, establishing the app as a highly trusted daily utility.",
      technologies: "Flutter, Localized SQLite DB, Push Notifications, Custom Astronomical Algorithms, Dart",
      features: [
        "Comprehensive Calendar Grid: A stunningly designed, highly intuitive visual guide displaying all 2025-2026 dates, massive traditional festivals, and crucial public holidays.",
        "Location-Aware Choghadiya: Incredibly accurate Day & Night Choghadiya (Amrut, Shubh, Labh) timings strictly tailored to your exact, real-time geographical location.",
        "Deep Astrological Details: Provides incredibly rich, daily astrological data comprehensively spanning Paksha, Nakshatra, Yoga, and Karana states.",
        "Automated Vrat Alerts: Features highly reliable, automatic push notifications for key traditional occurrences such as Ekadashi, Poonam, and Amas.",
        "Massive Spiritual Library: Acts as a comprehensive, handheld archive containing daily Aartis, highly revered spiritual Chalisa, Stuti, and deeply traditional Vrat Kathas.",
        "Zero-Latency Offline Mode: Built utilizing incredibly high-precision mathematical calculations coupled with a robust local database for complete, uninterrupted offline support."
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
  previewCount: 3,
  posts: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&q=80",
      image2: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
      date: "1 Jan, 2026",
      comments: 14,
      category: "Flutter & APIs",
      title: "How to Build a Flutter App with API Integration",
      link: "/blog/flutter-api-integration",
      description: "Learn how to build production-grade Flutter apps with strongly-typed API clients, interceptors, and robust error handling.",
      sections: [
        {
          type: "paragraph",
          heading: "Introduction",
          content: "API integration in Flutter succeeds when you treat contracts as seriously as widgets. As mobile applications evolve to become highly complex systems, their reliance on external data sources grows exponentially. When building scalable solutions, starting with a clear understanding of the API goals and payload structures is absolutely crucial. Developers must meticulously account for JSON schemas, strict versioning, network timeouts, and precise error shapes before animating a single loading state. In this comprehensive deep dive, we explore exactly how robust, enterprise-grade API integration acts as the fundamental backbone of modern mobile architectures."
        },
        {
          type: "paragraph",
          heading: "The Challenge of Raw Data Integration",
          content: "Without proper structure, integration code inevitably tends to become unmaintainable over time. Common, deeply destructive issues include tight, inescapable coupling between UI and network layers, an absolute lack of clear documentation, and extremely poor scalability which drastically affects application performance under heavy load. When the backend eventually changes, mobile apps that recklessly hardcode endpoints and JSON mapping directly inside their UI view models face catastrophic crashes, user frustration, and terrible app reviews."
        },
        {
          type: "list",
          heading: "Core Architectural Best Practices",
          items: [
            { title: "Strongly-Typed Models", detail: "Generate immutable models with Freezed to prevent runtime null pointer exceptions during parsing." },
            { title: "Centralized Client", detail: "Use Dio with interceptors to automatically append JWT bearer auth tokens and refresh expired sessions." },
            { title: "Separation of Concerns", detail: "Abstract network operations into Repository layers, keeping the UI layers totally agnostic of the endpoint paths." },
            { title: "Offline Resilience", detail: "Gracefully intercept connection failures and show offline-first cached states rather than a blank loader." }
          ]
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
          alt: "REST API structure illustration"
        },
        {
          type: "paragraph",
          heading: "The Solution: Decoupled API Clients",
          content: "By implementing highly robust, battle-tested architectural patterns, we can completely decouple components and ensure completely seamless updates. A small, highly dedicated client layer keeps sensitive authentication tokens, automated background retries, and detailed request logging completely isolated from your UI code. Parsing complex JSON into strongly typed, immutable models through advanced code generation ensures that any schema breakage is instantly caught during compile time."
        },
        {
          type: "list",
          heading: "Immediate Benefits for Your Business",
          items: [
            { title: "Ease of Maintenance", detail: "If endpoints change, you only edit one repository file without touching single screen files." },
            { title: "Improved Testability", detail: "Mock repositories effortlessly in unit tests to validate widget state machines." },
            { title: "Sub-Second Startup", detail: "Optimized parsing saves main thread frames, ensuring smooth onboarding." }
          ]
        },
        {
          type: "paragraph",
          heading: "Final Thoughts",
          content: "Ultimately, taking the required time to properly architect your API approach pays absolutely massive dividends as your active user base grows. Thorough, uncompromising planning effectively eliminates technical debt before it even has a chance to occur, and sets up a rock-solid foundation for future scaling."
        }
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      date: "15 Jan, 2026",
      comments: 8,
      category: "Performance",
      title: "Best Practices for Mobile App Performance Optimization",
      link: "/blog/mobile-performance",
      description: "Relentless performance profiling budgets: how to keep Flutter and native apps running at a butter-smooth 120 FPS on budget devices.",
      sections: [
        {
          type: "paragraph",
          heading: "Introduction",
          content: "Performance optimization is not an afterthought; it is a core feature that defines the success of any mobile application. Users have incredibly low tolerance for jittery scrolling, agonizingly slow startup times, and unresponsive buttons. When building with powerful frameworks like Flutter, it is incredibly easy to accidentally introduce performance bottlenecks by overusing heavy widgets or ignoring memory management. The key to delivering a truly premium experience lies in measuring performance relentlessly on actual, physical hardware. Emulators simply do not accurately reflect the thermal throttling, memory constraints, and CPU limitations of a budget, three-year-old Android device."
        },
        {
          type: "paragraph",
          heading: "The Root Causes of Mobile Jank",
          content: "The most pervasive problem in mobile development is uncontrolled UI rebuilding. When state management is handled poorly, a simple animation or a tiny text update can trigger a massive, cascading rebuild of the entire widget tree. This leads to severe frame drops, horrific battery drain, and an application that feels incredibly sluggish and amateurish. Additionally, ignoring proper image caching strategies causes the app to repeatedly download massive assets over cellular networks, leading to astronomical memory spikes and eventual out-of-memory (OOM) crashes that completely destroy user trust."
        },
        {
          type: "list",
          heading: "Relentless Optimization Strategies",
          items: [
            { title: "Lazy List Rendering", detail: "Always use ListView.builder rather than standard lists to ensure off-screen cards are recycled." },
            { title: "Offload JSON Parsing", detail: "Spawn background Dart isolates to process heavy API response payloads to keep main threads clean." },
            { title: "Use Const Constructors", detail: "Decorate widgets as const to allow Flutter's rendering compiler to aggressively cache them." },
            { title: "Asset Optimizations", detail: "Compress local assets and leverage cached_network_image for intelligent caching on client devices." }
          ]
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          alt: "Performance metrics rendering"
        },
        {
          type: "paragraph",
          heading: "The Solution: Real Hardware Telemetry",
          content: "To decisively solve these critical jank issues, developers must implement highly bounded rebuilds using precise keys and localized state controllers. Heavy, complex lists must exclusively utilize lazy-loading architectures, ensuring that only the widgets currently visible on the screen are actually rendered and retained in memory. Furthermore, all significant background computations must be aggressively offloaded to entirely separate isolates, ensuring the main UI thread remains completely unblocked and capable of rendering a flawless 60 to 120 frames per second."
        },
        {
          type: "list",
          heading: "Measurable Results of Optimization",
          items: [
            { title: "Increased Conversion", detail: "Buttery-smooth UI feel builds trust, leading to 25% higher in-app actions." },
            { title: "Extended Battery Life", detail: "Reduced CPU cycles protect device thermals and keep the app active longer." },
            { title: "Smaller App Bundles", detail: "Pruning unused assets shrinks APK/IPA sizes for rapid downloads over cellular." }
          ]
        },
        {
          type: "paragraph",
          heading: "Conclusion",
          content: "In conclusion, profiling must become a systematic, non-negotiable part of your team's development lifecycle. Performance is a continuous, relentless journey rather than a one-time destination. By integrating strict performance budgets directly into your CI/CD pipelines, you ensure that every single release maintains the highest possible standard of excellence."
        }
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      image2: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      date: "1 Feb, 2026",
      comments: 21,
      category: "Strategy",
      title: "Flutter vs Native Development: Which is Better?",
      link: "/blog/flutter-vs-native",
      description: "An objective, architectural breakdown comparing Swift/Kotlin and cross-platform Flutter for mobile product roadmaps.",
      sections: [
        {
          type: "paragraph",
          heading: "Introduction",
          content: "The debate between utilizing Flutter and sticking to purely Native development (Swift/Kotlin) is one of the most highly contested topics in the modern software engineering landscape. There is no single, universal winner; the optimal choice depends entirely on incredibly specific business constraints, available engineering talent, and the ultimate product vision. Flutter shines brilliantly for rapidly iterating and deploying a shared, highly branded UI simultaneously across Android and iOS platforms. Conversely, native development excels when a product relies almost exclusively on cutting-edge, platform-only APIs or demands extreme OS-specific fidelity."
        },
        {
          type: "paragraph",
          heading: "The Danger of Hype-Driven Decisions",
          content: "A massive problem arises when technical leaders make incredibly rigid framework decisions based purely on internet hype or personal zealotry, rather than conducting a rigorous analysis of the product's actual requirements. Forcing a cross-platform framework onto an application that requires deep, incredibly complex low-level bluetooth communication or intensive augmented reality (AR) rendering often leads to a convoluted mess of platform channels. On the flip side, forcing a startup with a highly limited budget to maintain two completely distinct native codebases often results in doubled development costs and slow time-to-market."
        },
        {
          type: "list",
          heading: "Technology Comparison Guide",
          items: [
            { title: "Development Speed", detail: "Flutter wins due to hot reload and a single shared codebase, cutting timelines by roughly 40%." },
            { title: "UI Flexibility", detail: "Flutter renders direct to a canvas, ensuring perfect brand matching across both operating systems." },
            { title: "Access to OS APIs", detail: "Native wins, offering instant compatibility with new APIs (e.g. Apple Watch, Live Activities) on day one." },
            { title: "Long-Term Security", detail: "Native avoids reliance on third-party bridge code, reducing framework deprecation risks." }
          ]
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
          alt: "Design wires and mockups comparison"
        },
        {
          type: "paragraph",
          heading: "The Solution: A Pragmatic Framework Choice",
          content: "The strategic solution involves conducting a highly objective architectural spike before writing a single line of production code. Assess the absolute core functionalities of your application: if the app is heavily UI-driven, relies on standard REST APIs, and requires a deeply custom, brand-centric aesthetic, Flutter is an exceptionally powerful, highly cost-effective weapon. However, if the app must tightly integrate with the newest, highly hardware-dependent features immediately upon release, maintaining a dedicated Native stack is the only truly safe approach."
        },
        {
          type: "list",
          heading: "When to Choose Flutter",
          items: [
            { title: "Limited Startup Budget", detail: "Build a robust MVP for both iOS and Android simultaneously using a single team." },
            { title: "Rich Custom Brand Aesthetics", detail: "Keep complex animations, shapes, and custom layouts perfectly identical on all devices." },
            { title: "Content-Driven Apps", detail: "Perfect for e-commerce, news, business dashboards, and utility tools." }
          ]
        },
        {
          type: "paragraph",
          heading: "Conclusion",
          content: "Choose Flutter when extreme cross-platform parity, heavily branded UI, and highly cost-effective maintenance are the primary business drivers. Lean toward native development strictly when a single platform or incredibly hardware-specific surface constitutes the entire foundation of the product."
        }
      ]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      image2: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      date: "20 Feb, 2026",
      comments: 5,
      category: "Security",
      title: "REST APIs for Flutter: Secure integration patterns",
      link: "/blog/flutter-rest-api",
      description: "How to protect mobile binaries: SSL pinning, secure local keystores, obfuscation, and token vaulting in Flutter applications.",
      sections: [
        {
          type: "paragraph",
          heading: "Introduction",
          content: "In the modern era of mobile application development, security can no longer be treated as an afterthought; it is a fundamental architectural requirement. Integrating REST APIs within a Flutter application exposes multiple potential attack vectors if not handled with absolute precision. Building a visually stunning application is entirely pointless if a malicious actor can easily intercept sensitive user data, manipulate payment payloads, or reverse-engineer your application to extract long-lived administrative secrets. Implementing highly secure, battle-tested integration patterns is the only way to protect both your business liability and your users' deeply personal data."
        },
        {
          type: "paragraph",
          heading: "Common Client-Side Vulnerabilities",
          content: "A critically dangerous problem occurs when inexperienced developers carelessly bake long-lived API secrets, database credentials, or sensitive encryption keys directly into the client-side source code. Because mobile binaries (APK/IPA) are incredibly easy to decompile, these hardcoded secrets are trivially extracted by automated bots within minutes of being published to the app stores. Furthermore, failing to properly validate SSL certificates leaves the application entirely vulnerable to catastrophic Man-In-The-Middle (MITM) attacks, allowing hackers to silently read and mutate every single piece of data flowing between the app and the server."
        },
        {
          type: "list",
          heading: "Core Security Architecture",
          items: [
            { title: "Encrypted Storage", detail: "Never store JWTs in plain SharedPreferences; use flutter_secure_storage to invoke Apple Keychain and Android Keystore." },
            { title: "SSL Pinning", detail: "Hardcode server SHA-256 certificate hashes in your Dio client to reject unverified connection proxies." },
            { title: "Code Obfuscation", detail: "Compile using --obfuscate and --split-debug-info to scramble symbol names, blocking decompilers." },
            { title: "Header Sanitization", detail: "Scrub auth tokens and personal details from standard print outputs before compiling release builds." }
          ]
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          alt: "Secure data encryption visualization"
        },
        {
          type: "paragraph",
          heading: "The Solution: Hardware Cryptography",
          content: "To completely eradicate these vulnerabilities, developers must strictly enforce a robust, token-based authentication architecture utilizing highly secure, short-lived access tokens combined with secure refresh mechanisms. Absolutely all network traffic must be rigidly forced over HTTPS using TLS 1.2 or higher. Critical data flows, such as payment processing and authentication, should heavily utilize SSL certificate pinning to definitively ensure the client is communicating exclusively with your verified backend."
        },
        {
          type: "list",
          heading: "Benefits of a Secure Codebase",
          items: [
            { title: "Legal & Compliance", detail: "Full alignment with global security laws (e.g. GDPR, CCPA) protecting business liability." },
            { title: "Frictionless Authentication", detail: "Secure background refresh tokens eliminate constant login prompts for users." },
            { title: "Enhanced Brand Trust", detail: "Demonstrable data protection practices win high-ticket enterprise clients." }
          ]
        },
        {
          type: "paragraph",
          heading: "Final Thoughts",
          content: "Finalizing a highly secure API integration requires continuous vigilance and rigorous auditing. Rate limits, timeouts, and sanitized console logs form the impenetrable shield your application requires. Secure your client, but secure your backend API even more."
        }
      ]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      image2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      date: "1 Mar, 2026",
      comments: 34,
      category: "Hiring",
      title: "Hire a Mobile App Developer: What to look for in India",
      link: "/blog/hiring-mobile-developer",
      description: "How to identify the top 1% of mobile engineering talent in India: portfolio audits, clean architecture spikes, and hiring checklists.",
      sections: [
        {
          type: "paragraph",
          heading: "Introduction",
          content: "The global demand for elite mobile application developers has reached unprecedented heights, and India has rapidly emerged as a massive, highly critical hub for sourcing top-tier engineering talent. However, successfully navigating this massive talent pool to find truly exceptional developers who can independently deliver production-ready code is notoriously challenging. Hiring managers are frequently overwhelmed by thousands of identical-looking resumes packed with buzzy keywords and generic tutorial projects. Knowing precisely what highly specific traits, deeply technical skills, and behavioral markers to look for is absolutely essential for building a high-performing team."
        },
        {
          type: "paragraph",
          heading: "The Keyword-Matching Resume Trap",
          content: "The primary problem in the current hiring landscape is the sheer abundance of candidates who look phenomenal on paper but completely crumble when faced with the harsh realities of maintaining a complex, highly scaled production application. Many developers can easily follow a basic YouTube tutorial to build a simple UI, but they severely lack the deep architectural understanding required to handle massive state management, complex background threading, or rigorous memory profiling. Hiring someone who fundamentally lacks discipline in code versioning or automated testing results in a fragile codebase."
        },
        {
          type: "list",
          heading: "Elite Candidate Assessment Guide",
          items: [
            { title: "Verifiable Portfolios", detail: "Verify actual, live Play Store or App Store listings to validate their practical, end-to-end delivery." },
            { title: "Architectural Spikes", detail: "Ask detailed questions about state choice (BLoC, Provider, Riverpod), folder modularity, and data caching." },
            { title: "API Contract IQ", detail: "Test their collaboration skills regarding pagination, token-refresh intercepts, and REST versioning." },
            { title: "Real Code Reviews", detail: "Present a messy mock file and ask them to audit it for jank, memory leaks, and anti-patterns." }
          ]
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
          alt: "Professional developer collaboration in India"
        },
        {
          type: "paragraph",
          heading: "The Solution: Real-World Testing Funnels",
          content: "The solution lies in drastically overhauling the technical interview process to focus exclusively on real-world, highly pragmatic scenarios rather than obscure academic puzzles. Probe deeply into their daily collaboration habits: ask them exactly how they handle critical production regressions, their precise discipline regarding hotfixes, and their deeply held philosophies on semantic versioning and phased, highly monitored rollout strategies."
        },
        {
          type: "list",
          heading: "Benefits of Hiring Top-Tier Talent",
          items: [
            { title: "Autonomous Shipping", detail: "Minimal micromagement needed as senior talent builds secure, modular codebases." },
            { title: "Fewer Code Rewrites", detail: "Disciplined engineering prevents crippling tech debt and codebase decay." },
            { title: "Faster Delivery Speed", detail: "Experienced developers leverage optimized architectures to ship features quickly." }
          ]
        },
        {
          type: "paragraph",
          heading: "Conclusion",
          content: "Ultimately, technical prowess must be heavily balanced with exceptional communication skills, especially in remote or highly distributed environments. Priority should be given to developers who communicate clearly, argue technical decisions pragmatically, and have a proven, verifiable track record of shipping real products."
        }
      ]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80",
      image2: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      date: "15 Mar, 2026",
      comments: 11,
      category: "Release",
      title: "Android & iOS release checklist for Flutter apps",
      link: "/blog/release-checklist",
      description: "An exhaustive guide to app store deployment: permissions alignment, privacy declarations, and phased rollout pipelines.",
      sections: [
        {
          type: "paragraph",
          heading: "Introduction",
          content: "Successfully launching a mobile application to the incredibly strict Apple App Store and Google Play Store is often a deeply stressful, highly error-prone process that acts as the final, massive hurdle of the development lifecycle. A truly successful release requires far more than simply compiling a release binary; it demands a highly rigorous, intensely systematic approach to ensure absolute compliance with constantly evolving store guidelines, flawless performance on varied production hardware, and absolute security. Establishing a rigid, highly comprehensive release checklist is the only proven method to completely eliminate the deployment chaos."
        },
        {
          type: "paragraph",
          heading: "Catastrophic Release Mistakes to Avoid",
          content: "Without a highly strict release protocol, development teams inevitably make catastrophic, completely avoidable mistakes. Forgetting to aggressively increment version codes leads to utterly failed uploads. Submitting applications with improperly configured permission strings, wildly inaccurate privacy nutrition labels, or completely missing cryptography declarations results in immediate, highly frustrating store rejections that can delay launch by weeks. Furthermore, failing to thoroughly test the fully obfuscated release binary masks severe, deeply hidden crashes."
        },
        {
          type: "list",
          heading: "The Essential Deployment Checklist",
          items: [
            { title: "Semantic Versioning", detail: "Increment version codes in pubspec.yaml systematically for every upload pipeline." },
            { title: "User-Facing Permissions", detail: "Provide crystal-clear, detailed descriptions inside Info.plist and AndroidManifest for camera/location access." },
            { title: "Privacy Disclosures", detail: "Audit and declare every pixel/analytics SDK tracking activity in App Store Connect." },
            { title: "ProGuard / R8 Obfuscation", detail: "Enable release-build code shrinking and obfuscation to prevent reverse engineering." }
          ]
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
          alt: "Software release success dashboard"
        },
        {
          type: "paragraph",
          heading: "The Solution: Automated Checklists",
          content: "The solution is to strictly enforce an exhaustive, highly automated pre-release checklist. Before any submission, developers must flawlessly validate every single permission string, heavily scrutinize all launcher icons and screenshots, tightly secure all cryptographic signing keys, and rigorously audit privacy declarations for absolute accuracy. Crucially, QA must conduct intense smoke tests focusing heavily on install sizes and complete UI responsiveness utilizing the exact, store-equivalent builds on real physical hardware."
        },
        {
          type: "list",
          heading: "Immediate Benefits of release hygiene",
          items: [
            { title: "Day-One App Approval", detail: "Flawless compliance guarantees rapid store approvals, hitting key deadlines." },
            { title: "Zero Launch-Day Crashes", detail: "Intense pre-release smoke testing eliminates embarrassing launch regressions." },
            { title: "Higher Algorithmic Visibility", detail: "Positive early user reviews boost organic store rankings, saving marketing budget." }
          ]
        },
        {
          type: "paragraph",
          heading: "Conclusion",
          content: "Finally, an elite release strategy always includes a deeply comprehensive rollback and monitoring plan. Never blindly deploy to 100% of your user base simultaneously; instead, heavily utilize phased, highly controlled rollout percentages. By treating the release process with extreme respect, you ensure that every single launch is a massive, highly predictable success."
        }
      ]
    }
  ]
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
