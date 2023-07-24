"use client";

import { motion } from "framer-motion";

const Motion4 = () => {
  return (
    <div className="flex flex-col justify-center w-full px-20 bg-white/30 rounded-3xl h-[500px]">
      <motion.div
        whileTap={{ scale: 1.1 }}
        className="flex justify-center bg-red-100 h-[400px] items-center rounded-3xl"
      >
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="h-[200px] w-[200px] bg-[#502274] rounded-3xl mx-4"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Motion4;
