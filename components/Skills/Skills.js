/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const getSkillImagePath = (skill) => {
  const nameMap = {
    cplusplus: "cplusplus",
    "Scikit-learn": "scikit-learn",
    "scikit-learn": "scikit-learn",
  };

  if (nameMap[skill]) {
    return `/skills/${nameMap[skill]}.svg`;
  }

  return `/skills/${skill.toLowerCase().replace(/\s|\(|\)/g, "")}.svg`;
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
            Cybersecurity, Full-Stack Development, and AI/ML expertise for secure, intelligent systems.{" "}
            </h2>
          </div>
          {Array.isArray(SKILLS.languages) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                LANGUAGES
              </h3>
              <div className="flex items-center flex-wrap gap-6 staggered-reveal">
                {SKILLS.languages.map((skill) => (
                  <Image
                    key={skill}
                    src={getSkillImagePath(skill)}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          )}
          {Array.isArray(SKILLS.developerTools) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                DEVELOPER TOOLS
              </h3>
              <div className="flex items-center flex-wrap gap-6 staggered-reveal">
                {SKILLS.developerTools.map((skill) => (
                  <Image
                    key={skill}
                    src={getSkillImagePath(skill)}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          )}
          {Array.isArray(SKILLS.frameworksAndLibraries) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                FRAMEWORKS & LIBRARIES
              </h3>
              <div className="flex items-center flex-wrap gap-6 staggered-reveal">
                {SKILLS.frameworksAndLibraries.map((skill) => (
                  <Image
                    key={skill}
                    src={getSkillImagePath(skill)}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          )}
          {Array.isArray(SKILLS.databases) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                DATABASES & SECURITY
              </h3>
              <div className="flex items-center flex-wrap gap-6 staggered-reveal">
                {SKILLS.databases.map((skill) => (
                  <Image
                    key={skill}
                    src={getSkillImagePath(skill)}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          )}
          {Array.isArray(SKILLS.cybersecurity) && (
            <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 md:p-8 border border-red-500/20 staggered-reveal">
              <div className="flex items-center gap-3 mb-6 min-w-0">
                <span className="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white stroke-current group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1L3 5v7c0 7 9 11 9 11s9-4 9-11V5l-9-4z" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                    <path d="M12 10v4M10 12h4" strokeWidth="1.2" />
                  </svg>
                </span>
                <h3 className="uppercase tracking-widest text-red-400 font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                  CYBERSECURITY
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {SKILLS.cybersecurity.map((skill) => (
                  <div
                    key={skill}
                    className="group relative px-3 py-2 bg-red-900/20 border border-red-500/40 rounded-lg hover:border-red-400 hover:bg-red-900/40 transition-all duration-300 cursor-pointer min-w-0"
                  >
                    <span className="text-xs sm:text-sm font-medium text-red-300 group-hover:text-red-200 block truncate">
                      {skill}
                    </span>
                    <div className="absolute inset-0 bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {Array.isArray(SKILLS.aiMl) && (
            <div className="mt-10 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 md:p-8 border border-blue-500/20 staggered-reveal">
              <div className="flex items-center gap-3 mb-6 min-w-0">
                <span className="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white stroke-current group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                    <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                    <circle cx="6" cy="18" r="1.5" fill="currentColor" />
                    <circle cx="18" cy="18" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <path d="M6 6L12 12" />
                    <path d="M18 6L12 12" />
                    <path d="M6 18L12 12" />
                    <path d="M18 18L12 12" />
                    <path d="M6 6L18 6M6 18L18 18" />
                  </svg>
                </span>
                <h3 className="uppercase tracking-widest text-blue-400 font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                  AI / MACHINE LEARNING
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {SKILLS.aiMl.map((skill) => (
                  <div
                    key={skill}
                    className="group relative px-3 py-2 bg-blue-900/20 border border-blue-500/40 rounded-lg hover:border-blue-400 hover:bg-blue-900/40 transition-all duration-300 cursor-pointer min-w-0"
                  >
                    <span className="text-xs sm:text-sm font-medium text-blue-300 group-hover:text-blue-200 block truncate">
                      {skill}
                    </span>
                    <div className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {Array.isArray(SKILLS.additionalSkills) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                ADDITIONAL TECHNOLOGIES
              </h3>
              <div className="flex items-center flex-wrap gap-4 staggered-reveal">
                {SKILLS.additionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 text-sm font-medium hover:border-indigo-light hover:text-indigo-light transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {Array.isArray(SKILLS.toolsAndPlatforms) && (
            <div className="mt-10 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 md:p-8 border border-emerald-500/20 staggered-reveal">
              <div className="flex items-center gap-3 mb-6 min-w-0">
                <span className="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white stroke-current group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    <path d="M8 12l2 2 4-4M17 12h1" />
                  </svg>
                </span>
                <h3 className="uppercase tracking-widest text-emerald-400 font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                  TOOLS & PLATFORMS
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {SKILLS.toolsAndPlatforms.map((skill) => (
                  <div
                    key={skill}
                    className="group relative px-3 py-2 bg-emerald-900/20 border border-emerald-500/40 rounded-lg hover:border-emerald-400 hover:bg-emerald-900/40 transition-all duration-300 cursor-pointer min-w-0"
                  >
                    <span className="text-xs sm:text-sm font-medium text-emerald-300 group-hover:text-emerald-200 block truncate">
                      {skill}
                    </span>
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />
                  </div>
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
