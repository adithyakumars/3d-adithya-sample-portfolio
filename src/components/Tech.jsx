import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const TechCard = ({ index, icon }) => {
  return (
    <Tilt className="w-28 h-28 pt-10">
      <div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[2px] rounded-full shadow-card select-none">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-full py-5 flex justify-evenly items-center flex-col">
          <img src={icon} className="w-16 h-16 object-contain" />
        </div>
      </div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Tools</p>
      <h2 className={styles.sectionHeadText}>Technologies</h2>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-5'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <TechCard icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, '');