export const METADATA = {
  author: "Mohammed Sadath",
  title: "Portfolio | Mohammed Sadath",
  description:
    "B.Tech student passionate about Cybersecurity, Full-Stack Development, and AI/ML. Building secure, intelligent, and scalable applications that solve real-world problems.",
  siteUrl: "https://sadath-shah.vercel.app/",
  twitterHandle: "",
  keywords: [
    "Mohammed Sadath",
    "Cybersecurity",
    "Full-Stack Developer",
    "AI/ML",
    "Threat Hunting",
    "SOC",
    "Portfolio",
  ].join(", "),
  image: "https://your-image-url.com/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  { name: "Home", ref: "home" },
  { name: "Skills", ref: "skills" },
  { name: "Projects", ref: "projects" },
  { name: "Experience", ref: "work" },
  { name: "Contact", ref: "contact" },
];
export const TYPED_STRINGS = [
  "Cybersecurity | Full-Stack | AI/ML",
  "Threat Hunting • Secure Code • Intelligent Systems",
  "Building secure, scalable solutions",
];

export const SOCIAL_LINKS = [
  {
    name: "github",
    url: "https://github.com/sadath-shah",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/sadath-shah",
  },
  {
    name: "instagram",
    url: "https://instagram.com/sadath_shah",
  },
  {
    name: "mail",
    url: "mailto:sadathshah13@gmail.com",
  },
];

export const SKILLS = {
  languages: [
    "Python",
    "JavaScript",
    "Java",
    "C",
    "cplusplus",
    "HTML",
    "css",
  ],

  developerTools: [
    "git",
    "GitHub",
    "Docker",
    "Postman",
  ],

  frameworksAndLibraries: [
    "Django",
    "tailwindcss",
    "Bootstrap",
    "scikit-learn",
    "Pandas",
  ],

  cybersecurity: [
    "Threat Hunting",
    "SOC / SIEM",
    "Phishing Detection",
    "IOC Extraction",
    "MITRE ATT&CK",
    "Log Analysis",
    "Risk Scoring",
    "Brute-Force Detection",
    "C2 Beacon Detection",
    "Port-Scan Detection",
    "CloudTrail Analysis",
    "Threat Detection",
  ],

  aiMl: [
    "Scikit-learn",
    "TF-IDF",
    "HDBSCAN",
    "NumPy",
    "Pandas",
    "Anomaly Detection",
    "Machine Learning Classification",
    "Rule-Based Detection",
  ],

  additionalSkills: [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask",
    "MongoDB",
    "MySQL",
    "JWT",
    "bcrypt",
    "Linux",
    "GitHub Actions",
    "AWS CloudTrail",
    "Zeek",
    "Vite",
    "Axios",
  ],

  toolsAndPlatforms: [
    "Git",
    "GitHub",
    "Linux",
    "Docker",
    "GitHub Actions",
    "AWS CloudTrail",
    "Zeek",
    "Vite",
    "Postman",
  ],
};
export const PROJECTS = [
  {
    name: "Sigwood — Threat-Hunting CLI",
    description:
      "Local-first threat-hunting platform combining Zeek, DNS, syslog, and CloudTrail analysis with advanced ML. Detects C2 beacons using HDBSCAN DNS anomaly detection, identifies log anomalies with Drain3, and flags port-scans & data exfiltration. Includes streaming pipeline, pytest, GitHub Actions CI/CD, and pip/pipx packaging.",
    tech: ["python"],
    gradient: ["#EF5350", "#F05F72"],
    image: "/projects/sigwood-screenshot.png",
    blurImage: "/projects/sigwood-screenshot.png",
    url: "https://github.com/sadath-shah/sigwood",
  },
  {
    name: "AI Phishing Detector",
    description:
      "Full-stack phishing detection system combining ML classification with threat intelligence. Python backend uses Scikit-learn TF-IDF for phishing classification, extracts IOCs, and maps techniques to MITRE ATT&CK. React + FastAPI frontend dashboard visualizes risk scores, detections, and threat intelligence in a professional SOC UI.",
    tech: ["python", "react"],
    gradient: ["#FF6B6B", "#FF8E72"],
    image: "/projects/phishing-detector-interface.png",
    blurImage: "/projects/phishing-detector-interface.png",
    url: "https://github.com/sadath-shah/ai-phishing-detector",
  },
  {
    name: "SOC Log Monitoring System",
    description:
      "Production-grade SOC monitoring platform built with Flask + Python + MongoDB. Implements brute-force detection, severity-based alerting, and real-time log analysis. Features comprehensive REST API, role-based access control, and an intuitive dashboard for security analysts to track alerts and investigate incidents.",
    tech: ["python", "mongodb", "html"],
    gradient: ["#4A90E2", "#357ABD"],
    image: "/projects/soc-monitor-interface.png",
    blurImage: "/projects/soc-monitor-interface.png",
    url: "https://github.com/sadath-shah/soc-log-monitor",
  },
  {
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application showcasing complete web development skills. Built with React frontend, Node.js/Express backend, and MongoDB database. Features JWT authentication, RBAC, bcrypt password hashing, Multer file uploads, and admin dashboard. Demonstrates production-ready architecture and best practices.",
    tech: ["react", "mongodb", "html", "css"],
    gradient: ["#00B894", "#00CEC9"],
    image: "/projects/ecommerce-listing.png",
    blurImage: "/projects/ecommerce-listing.png",
    url: "https://github.com/sadath-shah/E-Commerce-Website",
  },
];

export const WORK_CONTENTS = {
  INTERNSHIP: [
    {
      title: "Web Development Intern — BitraNet Pvt. Ltd.",
      subtitle: "June 2025 – August 2025",
      description:
        "Worked on dynamic web applications using PHP and JavaScript. Contributed to frontend and backend development, collaborating with the web development team to build, debug, and integrate features for real-world projects.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          <span className="text-sm">💼 Web Development</span>
        </div>
      ),
    },
  ],
  PERSONAL: [
    {
      title: "Sigwood — Local-First Threat-Hunting CLI",
      description:
        "Engineered a local-first command-line threat-hunting tool that analyzes Zeek network logs, DNS logs, system logs, and AWS CloudTrail activity without requiring a daemon, database, or outbound network calls. Implements C2 beacon detection, DNS anomaly detection, rare-event detection, authentication-failure analysis, port-scan detection, bulk-exfiltration detection, and CloudTrail anomaly detection.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "HDBSCAN", "Drain3", "FFT", "Zeek", "AWS CloudTrail", "pytest", "GitHub Actions"],
      github: "https://github.com/sadath-shah/sigwood",
      content: (
        <img
          src="/projects/sigwood-report.png"
          alt="Sigwood threat hunting report interface"
          className="w-full h-full object-cover rounded-lg"
        />
      ),
    },
  ],
};

export const RESUME_URL = "https://drive.google.com/file/d/1Sy1VUuR_SroeCxbFYtXiJKL4Ae0jJsEH/view?usp=share_link";

export const GTAG = "G-5HCTL2TJ5W";
