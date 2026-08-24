# 🚀 Your Portfolio Update Guide

Welcome! Your portfolio is fully customized. Here's how to maintain it going forward.

## ✅ Current Setup

**Name:** Mohammed Sadath  
**Title:** Cybersecurity | Full-Stack | AI/ML  
**Email:** sadathshah13@gmail.com  
**GitHub:** https://github.com/sadath-shah  
**LinkedIn:** https://linkedin.com/in/sadath-shah  
**Instagram:** https://instagram.com/sadath_shah  

## 📝 How to Update Your Portfolio

### 1. **Add a New Project**
Edit `projects-data.js` and add your project to the `PROJECTS_DATA` array:

```javascript
{
  name: "Your Project Name",
  description: "What your project does...",
  tech: ["python", "React.js", "Node.js"],
  gradient: ["#FF6B6B", "#4ECDC4"],
  image: "/projects/your-image.png",
  blurImage: "/projects/your-image.png",
  link: "https://github.com/sadath-shah/your-project",
}
```

Then save the project image to: `/public/projects/your-image.png`

That's it! No need to edit constants.js for projects.

### 2. **Change Your Bio/About Section**
Edit `constants.js`:

```javascript
export const METADATA = {
  description: "Your new bio here...",
  // ... other fields
}
```

### 3. **Update Social Links**
Edit `constants.js` → `SOCIAL_LINKS` array:

```javascript
export const SOCIAL_LINKS = [
  { name: "github", url: "https://github.com/your-username" },
  { name: "linkedin", url: "https://linkedin.com/in/your-profile" },
  { name: "mail", url: "mailto:your-email@example.com" },
  // Add or remove as needed
]
```

### 4. **Update Skills**
Edit `constants.js` → `SKILLS` object. Add/remove skills by category:

```javascript
export const SKILLS = {
  languages: ["Python", "JavaScript", "Java", ...],
  developerTools: ["Git", "GitHub", ...],
  frameworksAndLibraries: ["React.js", ...],
  cybersecurity: ["Threat Hunting", ...],
  aiMl: ["Scikit-learn", ...],
  databases: ["MongoDB", ...],
}
```

### 5. **Update Your Internship/Work**
Edit `constants.js` → `WORK_CONTENTS`:

```javascript
export const WORK_CONTENTS = {
  INTERNSHIP: [
    {
      title: "Your Position — Company Name",
      description: "What you did...",
      // ...
    },
  ],
}
```

## 🎨 Tech Icons Available

When adding skills or projects, use these tech keywords:
- `python`, `javascript`, `java`, `C`, `html`, `css`, `SQL`
- `React.js`, `Node.js`, `Express.js`, `FastAPI`, `Flask`, `Django`
- `MongoDB`, `MySQL`, `PostgreSQL`
- `scikit-learn`, `pandas`, `numpy`, `tensorflow`
- `git`, `github-svgrepo-com`, `docker`, `linux`
- And many more! Check the components/icons folder for available icons

## 🎨 Gradient Colors

Use any hex color pairs for project gradients:
```javascript
gradient: ["#FF6B6B", "#4ECDC4"]  // Red to Teal
gradient: ["#EF5350", "#F05F72"]  // Red shades
gradient: ["#4A90E2", "#357ABD"]  // Blue shades
```

## 🚀 Deploy to Live

When ready to go live:

1. **Build the portfolio:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel (recommended):**
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Or deploy to other platforms:** GitHub Pages, Netlify, etc.

## 📂 Project Structure

```
mehnaz-portfolio-main/
├── constants.js          ← Main config (name, bio, skills, work)
├── projects-data.js      ← Easy project management
├── components/           ← React components
├── pages/               ← Next.js pages
├── public/              ← Static assets
│   └── projects/        ← Project images go here
└── styles/              ← CSS/Tailwind styles
```

## 💡 Tips

- **Hot reload:** Changes to `constants.js` automatically refresh at http://localhost:3000
- **Images:** Always optimize project images before uploading (use TinyPNG or similar)
- **Descriptions:** Keep project descriptions 2-3 sentences max
- **Tech stack:** List only the main technologies used (3-4 max per project)

## ❓ Need Help?

If something breaks:
1. Check for syntax errors in the file you edited
2. Make sure all files are properly formatted (JSON/JavaScript)
3. Restart the dev server: `npm run dev`

---

**Made with ❤️ for your success!**
