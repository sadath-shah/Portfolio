/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  SiPython,
  SiJavascript,
  SiOpenjdk,
  SiC,
  SiHtml5,
  SiCss,
  SiReact,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiScikitlearn,
  SiPydantic,
  SiAxios,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiJsonwebtokens,
  SiGooglecloud,
  SiVite,
} from "react-icons/si";
import {
  LuDatabase,
  LuNetwork,
  LuServer,
  LuBinary,
  LuTarget,
  LuFish,
  LuScanSearch,
  LuBrainCircuit,
  LuListChecks,
  LuGauge,
} from "react-icons/lu";
import { MENULINKS, SKILLS } from "../../constants";

// Every skill maps to a real icon component: an official brand logo
// (Simple Icons) where one exists, otherwise a consistent Lucide icon
// standing in for the concept. No text-only chips, no broken images.
// `color` is the technology's official/commonly recognized brand color
// (or a tasteful neutral accent for icons with no official logo/color),
// lightened where needed so it stays visible on a black card.
const SKILL_ICONS = {
  Python: { icon: SiPython, color: "#4B8BBE" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Java: { icon: SiOpenjdk, color: "#5382A1" },
  C: { icon: SiC, color: "#A8B9CC" },
  SQL: { icon: LuDatabase, color: "#38BDF8" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#2965F1" },

  "React.js": { icon: SiReact, color: "#61DAFB" },
  FastAPI: { icon: SiFastapi, color: "#05998B" },
  Flask: { icon: SiFlask, color: "#F2F2F2" },
  Django: { icon: SiDjango, color: "#44B78B" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#E5E7EB" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  Pydantic: { icon: SiPydantic, color: "#E92063" },
  Axios: { icon: SiAxios, color: "#8A6DE9" },
  Bootstrap: { icon: SiBootstrap, color: "#9179E3" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },

  "MITRE ATT&CK": { icon: LuTarget, color: "#F59E0B" },
  "Phishing Detection": { icon: LuFish, color: "#F87171" },
  "IOC Extraction": { icon: LuScanSearch, color: "#22D3EE" },
  "TF-IDF": { icon: LuBrainCircuit, color: "#A78BFA" },
  "Rule-Based Threat Detection": { icon: LuListChecks, color: "#60A5FA" },
  "Risk Scoring": { icon: LuGauge, color: "#FBBF24" },

  Git: { icon: SiGit, color: "#F05033" },
  GitHub: { icon: SiGithub, color: "#F2F2F2" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#5D9FD3" },
  Mongoose: { icon: SiMongoose, color: "#DD5B4B" },
  "REST APIs": { icon: LuNetwork, color: "#38BDF8" },
  JWT: { icon: SiJsonwebtokens, color: "#FB015B" },
  "Google Cloud Platform": { icon: SiGooglecloud, color: "#4285F4" },
  Vite: { icon: SiVite, color: "#9179FF" },
  Uvicorn: { icon: LuServer, color: "#2DD4BF" },
  Joblib: { icon: LuBinary, color: "#FDBA74" },
};

const SkillChip = ({ skill }) => {
  const { icon: Icon, color } = SKILL_ICONS[skill];

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-black border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300">
      <Icon
        className="w-5 h-5 flex-shrink-0"
        style={{ color }}
      />
      <span className="text-lg font-medium text-white whitespace-nowrap">
        {skill}
      </span>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Cybersecurity, Full-Stack Development, and AI/ML expertise for
              secure, intelligent systems.{" "}
            </h2>
          </div>

          {Array.isArray(SKILLS.languages) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3 staggered-reveal">
                {SKILLS.languages.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {Array.isArray(SKILLS.frameworksAndLibraries) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                Frameworks / Libraries
              </h3>
              <div className="flex flex-wrap gap-3 staggered-reveal">
                {SKILLS.frameworksAndLibraries.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {Array.isArray(SKILLS.securityAndMl) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                Security / Machine Learning
              </h3>
              <div className="flex flex-wrap gap-3 staggered-reveal">
                {SKILLS.securityAndMl.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {Array.isArray(SKILLS.toolsAndPlatforms) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3 staggered-reveal">
                {SKILLS.toolsAndPlatforms.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
