import { motion } from "framer-motion";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";

import { styles } from "../styles";

const Hero = () => {
  const splineRef = useRef(null);

  return (
    <section className="w-full h-screen flex flex-col items-center">
      {/* 3D Spline Container (Takes Full Height) */}

      {/* Text & UI Container (Below Spline) */}
      <div className="w-full h-[40vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className={`${styles.heroHeadText} text-white text-3xl sm:text-4xl`}>
          Hi, I'm <span className="text-[#5587d4]">Nujan</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100 text-base sm:text-lg`}>
          Crafting intelligent, scalable solutions—bridging data, code, and cloud.
        </p>
      </div>

        <div className="w-full h-[50vh]">
          <Spline
            scene="https://prod.spline.design/4pPpv-IMIS4tjit3/scene.splinecode"
            onLoad={(spline) => {
              splineRef.current = spline;
              console.log("Spline scene loaded:", spline);
            }}
            className="w-full h-full"
          />
        </div>
        {/* Scroll Indicator */}
        <div className="mt-6">
          <a href="#about">
            <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
    </section>
  );
};

export default Hero;
