import React from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <motion.footer
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="bg-black-200 p-6 mt-12 rounded-t-[20px]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <p className="text-white text-center text-[16px] font-medium">
          © 2025 Prachi Janjire. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/prachi-janjire-924b0a258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 text-[24px] transition-all duration-300"
          >
            <AiFillLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Prachii2525/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-[24px] transition-all duration-300"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
