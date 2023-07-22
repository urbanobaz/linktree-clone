"use client";

import { cn } from "@/app/helpers/utils";
import { Black_Han_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const black_hans = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
});

type WordFadeProps = {
  words: Array<string>;
};

const WordFade: React.FC<WordFadeProps> = ({ words }) => {
  const [wordNumber, setWordNumber] = useState(0);
  const [wordOnDisplay, setWordOnDisplay] = useState(words[wordNumber]);
  const length = words.length;

  useEffect(() => {
    if (wordNumber) {
      if (wordNumber < length) {
        setTimeout(() => {
          setWordOnDisplay(words[wordNumber]);
        }, 1500);
      } else if (wordNumber === length) {
        setWordNumber(0);
        setTimeout(() => {
          setWordOnDisplay(words[wordNumber]);
        }, 10000);
      }
    }
  }, [wordNumber]);

  return (
    <div>
      <h2
        className={cn(
          black_hans.className,
          "text-5xl text-blue-500 leading-none bold w-full text-center"
        )}
      >
        {wordOnDisplay ? wordOnDisplay : "influencers"}
      </h2>
    </div>
  );
};

export default WordFade;
