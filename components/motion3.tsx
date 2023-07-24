"use client";

import { motion } from "framer-motion";

const Motion3 = () => {
  return (
    <div className="flex flex-col justify-center w-full px-20 bg-white/30 rounded-3xl h-[500px]">
      <div className="flex justify-between bg-white h-[200px] items-center rounded-3xl">
        <motion.div
          drag="y"
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          className="h-[100px] w-[100px] bg-red-500 rounded-full mx-4"
        ></motion.div>
        <motion.div
          drag="x"
          dragConstraints={{ left: -250, right: 250 }}
          whileTap={{ scale: 0.8 }}
          className="h-[100px] w-[100px] bg-pink-300 rounded-full mx-4"
        ></motion.div>
        <motion.div
          drag
          dragConstraints={{ left: -475, right: 50, top: -100, bottom: 100 }}
          className="h-[100px] w-[100px] bg-blue-500 rounded-full mx-4"
        ></motion.div>
      </div>
    </div>
  );
};

export default Motion3;
