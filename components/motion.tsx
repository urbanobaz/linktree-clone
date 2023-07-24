"use client";

import { motion } from "framer-motion";

const Motion = () => {
  return (
    <div className="flex justify-center w-full pb-8 px-20">
      <motion.div
        className="h-[100px] w-[100px] bg-[#D2E823] rounded-3xl mx-4"
        animate={{ rotate: [0, 200, 200, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></motion.div>
      <motion.div
        className="h-[100px] w-[100px] bg-black rounded-3xl mx-4"
        animate={{ rotate: [0, 360, 360, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      ></motion.div>
      <motion.div
        className="h-[100px] w-[100px] bg-pink-300 rounded-3xl mx-4"
        animate={{ rotate: [0, -200, -200, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></motion.div>
    </div>
  );
};

export default Motion;
