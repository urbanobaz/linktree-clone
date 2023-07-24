"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Images = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <Image
        alt="Image"
        src={"/hall.jpg"}
        width={200}
        height={400}
        className="rounded-3xl mr-20 object-contain"
      />

      <motion.div>
        <Image
          alt="Image"
          src={"/celebrity.jpg"}
          width={200}
          height={400}
          className="rounded-3xl mr-20"
        />
      </motion.div>

      <motion.div>
        <Image
          alt="Image"
          src={"/celebrity2.jpg"}
          width={200}
          height={400}
          className="rounded-full mr-20"
        />
      </motion.div>

      <motion.div>
        <Image
          alt="Image"
          src={"/colors.jpg"}
          width={200}
          height={400}
          className="rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default Images;
