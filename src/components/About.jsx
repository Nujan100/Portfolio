import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section>
      <Helmet>
        <title>About Me - Your Portfolio</title>
        <meta name="description" content="Learn more about me, a skilled software developer with a passion for creating efficient, scalable, and user-friendly solutions." />
      </Helmet>
      <header>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
      </header>

      <article>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I’m a skilled software developer and passionate software builder with a strong enthusiasm for data science. I’m a quick learner who collaborates closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let’s work together to bring your ideas to life and unlock data-driven insights!
        </motion.p>
      </article>

      <section className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </section>
    </section>
  );
};

export default SectionWrapper(About, "about");
