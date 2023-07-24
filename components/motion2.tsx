"use client";

import { motion } from "framer-motion";

const Motion2 = () => {
  return (
    <div className="flex flex-col justify-center w-full pb-8 px-20">
      <div className="flex mb-10">
        <motion.div
          className="h-[100px] w-[100px] bg-[#502274] rounded-full mx-4"
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>
        <motion.div
          className="h-[100px] w-[100px] bg-white rounded-3xl mx-4"
          animate={{ rotate: [0, 360, 360, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        ></motion.div>
        <motion.div
          className="h-[100px] w-[100px] bg-[#502274] rounded-full mx-4"
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>
      </div>
      <div className="flex mb-10">
        <motion.div
          className="h-[100px] w-[100px] bg-[#502274] rounded-3xl mx-4"
          animate={{ rotate: [0, 200, 200, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>
        <motion.div
          className="h-[100px] w-[100px] bg-white rounded-3xl mx-4"
          animate={{ rotate: [0, 360, 360, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        ></motion.div>
        <motion.div
          className="h-[100px] w-[100px] bg-[#502274] rounded-3xl mx-4"
          animate={{ rotate: [0, -200, -200, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>
      </div>
      <div className="flex mb-10">
        <motion.div
          className="h-[100px] w-[100px] bg-[#502274] rounded-full mx-4"
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>
        <motion.div
          className="h-[100px] w-[100px] bg-white rounded-3xl mx-4"
          animate={{ rotate: [0, 360, 360, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        ></motion.div>
        <motion.div
          className="h-[100px] w-[100px] bg-[#502274] rounded-full mx-4"
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Motion2;
