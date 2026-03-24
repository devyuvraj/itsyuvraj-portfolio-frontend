import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DataService {

  // ── Profile ──────────────────────────────────────────────────────
  readonly profile = {
    name: "Yuvraj Soni",
    role: "Full Stack / MEAN Stack Developer",
    email: "yuvrajsoni92@gmail.com",
    location: "Indore, Madhya Pradesh, India",
    linkedin: "https://linkedin.com/in/yuvraj-soni-9aa765107/",
    portfolio: "https://www.itsyuvraj.com",
    resumePath: "assets/Yuvraj_Soni_Resume.pdf",
    available: true,
    summary: "Full Stack Developer with 7+ years of experience specializing in the MEAN Stack. Experienced in architecting and developing scalable, high-performance web applications across e-commerce, fintech, and hospitality domains.",
    currentCompany: "Tata Consultancy Services (TCS)",
    currentPeriod: "Dec 2022 – Present",
    domain: "Cruise Line Hospitality",
    experience: "7",
    companies: "3 Companies",
    projects: "10+",
    angularYears: "17"
  };

  // ── Stats (Hero section) ─────────────────────────────────────────
  readonly stats = [
    { value: "7+", label: "Years Experience" },
    { value: "3", label: "Companies" },
    { value: "10+", label: "Projects Delivered" },
    { value: "17", label: "Angular Versions" }
  ];

  // ── Typewriter words (Hero section) ─────────────────────────────
  readonly typewriterWords = [
    "Angular Expert",
    "MEAN Stack Dev",
    "Full Stack Engineer",
    "UI Architect"
  ];

  // ── About highlights ─────────────────────────────────────────────
  readonly highlights = [
    {
      icon: "🎯",
      title: "Enterprise Focus",
      desc: "Built complex admin panels and dashboards serving thousands of users across fintech, hospitality, and healthcare domains."
    },
    {
      icon: "🏗️",
      title: "Architecture First",
      desc: "Expert in lazy loading, NgRx state management, modular architecture, and scalable component-driven design patterns."
    },
    {
      icon: "⚡",
      title: "Performance Driven",
      desc: "Specialized in Angular change detection optimization, lazy data rendering, and API performance tuning for enterprise scale."
    }
  ];

  // ── Skills ───────────────────────────────────────────────────────
  readonly skillGroups = [
    {
      category: "Frontend", icon: "🖥️",
      skills: [
        { name: "Angular (v2–v17)", level: 97 },
        { name: "TypeScript", level: 94 },
        { name: "RxJS", level: 90 },
        { name: "NgRx", level: 87 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "PrimeNG / Angular Material", level: 88 }
      ]
    },
    {
      category: "Backend", icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "RESTful APIs", level: 95 },
        { name: "Microservices", level: 82 },
        { name: "PHP / Laravel", level: 72 }
      ]
    },
    {
      category: "Database", icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      category: "DevOps & Tools", icon: "🛠️",
      skills: [
        { name: "Git / GitHub", level: 92 },
        { name: "Azure", level: 75 },
        { name: "AWS (Basic)", level: 65 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Postman", level: 88 }
      ]
    }
  ];

  readonly skillBadges = [
    "Angular CLI", "Lazy Loading", "JWT Auth", "Interceptors", "Guards",
    "State Management", "Change Detection", "SSR", "Performance Tuning",
    "Code Reviews", "Mentoring", "Sprint Planning", "CI/CD", "REST Design"
  ];

  // ── Experience ───────────────────────────────────────────────────
  readonly experiences = [
    {
      company: "Tata Consultancy Services",
      shortName: "TCS",
      role: "Full Stack / MEAN Stack Developer",
      period: "Dec 2022 – Present",
      duration: "2.3 yrs",
      location: "Indore, India",
      domain: "Cruise Line Hospitality",
      url: "https://www.tcs.com",
      isCurrent: true,
      color: "#1B4FD8",
      highlights: [
        "Led end-to-end development of the Cruise Personnel System Admin Panel using Angular 15, PrimeNG & Node.js",
        "Engineered an Airtable-like reporting module with dynamic grouping, inline editing, cloning & real-time config sync",
        "Architected component-driven frontend with lazy loading, shared modules & NgRx-based state management",
        "Developed secure RESTful APIs with Node.js, Express.js & MongoDB for user roles & live data sync",
        "Implemented token-based auth & interceptor-driven error handling for data consistency"
      ],
      tags: ["Angular 15", "PrimeNG", "NgRx", "Node.js", "MongoDB", "RxJS"]
    },
    {
      company: "Xsilica Software Solutions",
      shortName: "Xsilica",
      role: "Full Stack Developer (Angular + Node.js)",
      period: "Sep 2021 – Nov 2022",
      duration: "1.2 yrs",
      location: "Hyderabad, India",
      domain: "Fintech – Payment Gateway",
      url: "https://www.xsilica.com",
      isCurrent: false,
      color: "#0891B2",
      highlights: [
        "Developed the PayG Merchant Dashboard — real-time transaction analytics & settlement management platform",
        "Designed RESTful APIs for payment reconciliation, reporting & payout scheduling",
        "Built reusable Angular components with RxJS services, reducing redundant code by 40%",
        "Implemented JWT-based authentication and role-based access control for fintech compliance",
        "Mentored junior developers and conducted peer reviews improving overall code quality"
      ],
      tags: ["Angular 12", "Node.js", "Angular Material", "JWT", "RxJS", "MongoDB"]
    },
    {
      company: "Ooze IT Solutions Pvt. Ltd.",
      shortName: "Ooze IT",
      role: "Angular Developer",
      period: "Jul 2019 – Aug 2021",
      duration: "2.2 yrs",
      location: "Udaipur, India",
      domain: "eCommerce (Healthcare)",
      url: "https://www.itooze.com",
      isCurrent: false,
      color: "#6366F1",
      highlights: [
        "Developed HPFY.com Admin Panel — a centralized system managing 10+ healthcare eCommerce websites",
        "Engineered product catalog, coupon management, checkout workflows & report generation modules",
        "Designed & integrated RESTful APIs for Angular–.Net communication, improving data sync speed",
        "Collaborated with QA to reduce release turnaround and streamline UAT process",
        "Refactored legacy code with modular architecture, improving platform scalability"
      ],
      tags: ["Angular 7", "TypeScript", "ASP.NET", "MySQL", "REST APIs"]
    }
  ];

  // ── Projects ─────────────────────────────────────────────────────
  readonly projects = [
    {
      title: "Cruise Personnel System",
      subtitle: "Airtable-like Enterprise Admin Panel",
      company: "Tata Consultancy Services",
      category: "Enterprise App",
      categoryColor: "#1B4FD8",
      description: "A complex, configurable data management platform for cruise line operations. Built replicating Airtable-like functionality with advanced grid features serving multi-department enterprise workflows at scale.",
      highlights: [
        "Dynamic grouping, inline editing & real-time config sync",
        "NgRx state management with lazy loading architecture",
        "Advanced Angular change detection optimization",
        "Token-based auth with interceptor-driven error handling"
      ],
      stack: ["Angular 15", "PrimeNG", "RxJS", "NgRx", "Node.js", "Express.js", "MongoDB"],
      accentColor: "#1B4FD8",
      gradientFrom: "#EFF6FF",
      gradientTo: "#DBEAFE",
      emoji: "🚢"
    },
    {
      title: "PayG Merchant Dashboard",
      subtitle: "Real-time Fintech Analytics Platform",
      company: "Xsilica Software Solutions",
      category: "Fintech",
      categoryColor: "#0891B2",
      description: "A secure, real-time dashboard for merchants to manage transactions, settlements, and payout analytics. Improved transaction visibility and reduced downtime for merchant partners across the payment gateway.",
      highlights: [
        "Real-time transaction tracking & settlement management",
        "Reusable Angular components reducing code by 40%",
        "JWT authentication with role-based access control",
        "RxJS-based services for smooth API-driven performance"
      ],
      stack: ["Angular 12", "Node.js", "Angular Material", "Express.js", "JWT", "MongoDB"],
      accentColor: "#0891B2",
      gradientFrom: "#ECFEFF",
      gradientTo: "#CFFAFE",
      emoji: "💳"
    },
    {
      title: "HPFY.com Admin Panel",
      subtitle: "Multi-site Healthcare eCommerce Manager",
      company: "Ooze IT Solutions",
      category: "eCommerce",
      categoryColor: "#6366F1",
      description: "A centralized admin panel managing 10+ healthcare eCommerce websites. Streamlined product catalog, coupon management, checkout workflows, and reporting across all portal properties.",
      highlights: [
        "Centralized management for 10+ healthcare portals",
        "Product catalog, coupons & checkout workflow modules",
        "Angular–.Net API integration for faster data sync",
        "Legacy code refactoring with modular architecture"
      ],
      stack: ["Angular 7", "TypeScript", "ASP.NET", "MySQL", "REST APIs"],
      accentColor: "#6366F1",
      gradientFrom: "#EEF2FF",
      gradientTo: "#E0E7FF",
      emoji: "🏥"
    }
  ];

  // ── Contact Info ─────────────────────────────────────────────────
  readonly contactInfo = [
    { icon: "📧", label: "Email", value: "yuvrajsoni92@gmail.com", href: "mailto:yuvrajsoni92@gmail.com" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/yuvraj-soni...", href: "https://linkedin.com/in/yuvraj-soni-9aa765107/" },
    { icon: "📍", label: "Location", value: "Indore, MP, India", href: null }
  ];

  // ── Nav Links ─────────────────────────────────────────────────────
  readonly navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  // ── Footer Nav ────────────────────────────────────────────────────
  readonly footerLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];
}