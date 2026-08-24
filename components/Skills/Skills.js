/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

// Only skills with a verified, working icon file in /public/skills go here.
// Anything not listed renders as a clean text chip instead of a broken image.
const SKILL_ICONS = {
  Python: "Python",
  JavaScript: "javascript",
  Java: "Java",
  C: "C",
  HTML: "html",
  CSS: "css",
  Django: "Django",
  "Scikit-learn": "scikit-learn",
  "Tailwind CSS": "tailwindcss",
  Git: "git",
  GitHub: "GitHub",
  MongoDB: "mongodb",
};

const SkillChip = ({ skill }) => {
  const icon = SKILL_ICONS[skill];

  return (
    <div className="group flex items-center gap-2 px-3 py-2 bg-gray-800/60 border border-gray-700 rounded-lg hover:border-indigo-light hover:bg-gray-800 transition-all duration-300">
      {icon && (
        <Image
          src={`/skills/${icon}.svg`}
          alt=""
          width={20}
          height={20}
          className="flex-shrink-0"
        />
      )}
      <span className="text-sm font-medium text-gray-200 group-hover:text-indigo-light whitespace-nowrap">
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
                Tools / Platforms
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
