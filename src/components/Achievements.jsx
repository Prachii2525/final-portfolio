import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ title, description, image }) => (
  <motion.div
    whileHover={{ y: -10 }} // Slide-up effect on hover
    transition={{ duration: 0.3, type: "spring" }}
    className="bg-black-200 p-4 rounded-3xl flex flex-col items-center shadow-md hover:shadow-lg transform transition-all duration-300"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-[150px] object-cover rounded-t-3xl"
    />
    <div className="p-4 text-center">
      <h3 className="text-white font-bold text-[20px]">{title}</h3>
      <p className="mt-2 text-white text-[14px]">{description}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="mt-10 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "");
