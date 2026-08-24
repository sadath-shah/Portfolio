/**
 * PROJECTS DATA FILE
 *
 * ADD NEW PROJECTS HERE! No need to edit constants.js
 *
 * Template:
 * {
 *   name: "Project Name",
 *   description: "Brief description of what it does",
 *   tech: ["tech1", "tech2", "tech3"],
 *   gradient: ["#COLOR1", "#COLOR2"],
 *   image: "/projects/image-name.png",
 *   blurImage: "/projects/image-name.png",
 *   link: "https://github.com/..." (optional)
 * }
 *
 * Tech icons: python, React.js, Node.js, MongoDB, javascript, html, css, FastAPI, Flask, scikit-learn, zeek, github-svgrepo-com
 * Gradient colors: Use any hex colors you like
 *
 * To use: Import this in constants.js and spread it into PROJECTS array
 */

export const PROJECTS_DATA = [
  {
    name: "Sigwood — Threat-Hunting CLI",
    description:
      "Local-first threat-hunting platform combining Zeek, DNS, syslog, and CloudTrail analysis with advanced ML. Detects C2 beacons using HDBSCAN DNS anomaly detection, identifies log anomalies with Drain3, and flags port-scans & data exfiltration. Includes streaming pipeline, pytest, GitHub Actions CI/CD, and pip/pipx packaging.",
    tech: ["python", "scikit-learn", "zeek", "github-svgrepo-com"],
    gradient: ["#EF5350", "#F05F72"],
    image: "/projects/sigwood-logo.png",
    blurImage: "/projects/sigwood-logo.png",
    link: "https://github.com/sadath-shah/sigwood",
  },
  {
    name: "AI Phishing Detector",
    description:
      "Full-stack phishing detection system combining ML classification with threat intelligence. Python backend uses Scikit-learn TF-IDF for phishing classification, extracts IOCs, and maps techniques to MITRE ATT&CK. React + FastAPI frontend dashboard visualizes risk scores, detections, and threat intelligence in a professional SOC UI.",
    tech: ["python", "React.js", "FastAPI", "scikit-learn"],
    gradient: ["#FF6B6B", "#FF8E72"],
    image: "/projects/phishing-hero.png",
    blurImage: "/projects/phishing-hero.png",
    link: "https://github.com/sadath-shah/ai-phishing-detector",
  },
  {
    name: "SOC Log Monitoring System",
    description:
      "Production-grade SOC monitoring platform built with Flask + Python + MongoDB. Implements brute-force detection, severity-based alerting, and real-time log analysis. Features comprehensive REST API, role-based access control, and an intuitive dashboard for security analysts to track alerts and investigate incidents.",
    tech: ["python", "Flask", "MongoDB", "html"],
    gradient: ["#4A90E2", "#357ABD"],
    image: "/projects/soc-dashboard.png",
    blurImage: "/projects/soc-dashboard.png",
    link: "https://github.com/sadath-shah/soc-log-monitor",
  },
  {
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application showcasing complete web development skills. Built with React frontend, Node.js/Express backend, and MongoDB database. Features JWT authentication, RBAC, bcrypt password hashing, Multer file uploads, and admin dashboard. Demonstrates production-ready architecture and best practices.",
    tech: ["React.js", "Node.js", "MongoDB", "javascript"],
    gradient: ["#00B894", "#00CEC9"],
    image: "/projects/ecommerce-hero.png",
    blurImage: "/projects/ecommerce-hero.png",
    link: "https://github.com/sadath-shah/E-Commerce-Website",
  },
];

/**
 * HOW TO ADD NEW PROJECTS:
 *
 * 1. Add a new object to PROJECTS_DATA array above
 * 2. Fill in all fields (name, description, tech, gradient, image, link)
 * 3. If you have a project image, save it to: /public/projects/
 * 4. Update the image path in your project object
 * 5. That's it! The portfolio will automatically show it
 *
 * Example:
 * {
 *   name: "My New Project",
 *   description: "What does this project do...",
 *   tech: ["python", "React.js"],
 *   gradient: ["#FF6B6B", "#4ECDC4"],
 *   image: "/projects/my-project.png",
 *   blurImage: "/projects/my-project.png",
 *   link: "https://github.com/sadath-shah/my-new-project",
 * }
 */
