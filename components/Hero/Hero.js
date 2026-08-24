import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS } from "../../constants";

const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {
  const [lottie, setLottie] = useState(null);

  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);

    return () => typed.destroy();
  }, [typedElementRef]);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/lottie/lottie.json"),
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
    >
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
      <div className="flex flex-col pt-40 md:pt-0 select-none">
        <h5 className={`${styles.intro} font-mono font-medium text-indigo-light`}>
          Hi, my name is
        </h5>
        <h1 className={`${styles.heroName} text-6xl font-semibold text-white`}>
          <span className={`relative ${styles.emphasize}`}>
            Mohammed Sadath
          </span>
        </h1>
        <p>
          <span
            ref={typedElementRef}
            className="text-3xl text-gray-light-3 font-mono leading-relaxed"
          />
        </p>
        <div>
          <Profiles />
        </div>
        <div className="pt-4">
          <Button href={`#${MENULINKS[4].ref}`} classes="link" type="primary">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
      <div
        className="absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
        ref={lottieRef}
      />
    </section>
  );
};

export default Hero;
