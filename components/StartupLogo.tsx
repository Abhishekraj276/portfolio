"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Startup = () => {
  const [WidthBy2, setWidthBy2] = useState(0);
  const [HeightBy2, setHeightBy2] = useState(0);
  const [greaterThanSmall, setGreaterThanSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setWidthBy2(window.innerWidth / 2 - 68);
        setHeightBy2(window.innerHeight / 2 - 44);
        setGreaterThanSmall(true);
      } else {
        setWidthBy2(window.innerWidth / 2 - 28);
        setHeightBy2(window.innerHeight / 2 - 40);
        setGreaterThanSmall(false);
      }
    };
    handleResize(); // Initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 1 }}
      className="absolute h-full w-full flex justify-center items-center bg-StartupBackground"
    >
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, scale: 1 }}
        animate={{
          opacity: [1, 0.8, 1],
          x: -WidthBy2,
          y: -HeightBy2,
          scale: greaterThanSmall ? 0.6 : 0.5,
        }}
        transition={{
          opacity: { delay: 2, duration: 1.5 },
          x: { duration: 0.5, delay: 3 },
          y: { duration: 0.5, delay: 3 },
          scale: { duration: 0.5, delay: 3 },
        }}
        className="relative h-32 w-32 flex justify-center items-center"
      >
        {/* Horizontal lines */}
        {[30, -30].map((xPos, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 90, x: xPos }}
            transition={{
              scale: { duration: 1.5 },
              rotate: { delay: 0.5, duration: 0.5 },
              x: { delay: 0.8, duration: 1 },
            }}
            className="absolute h-1.5 w-12 bg-AAsecondary rounded"
          />
        ))}
        
        {/* Diagonal lines around "A" */}
        {[20, -20].map((xPos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1.1,
              rotate: i % 2 === 0 ? 45 : -45,
              x: xPos,
              y: i < 1 ? -30 : 30,
            }}
            transition={{
              opacity: { delay: 1, duration: 1 },
              scale: { duration: 1.5 },
              rotate: { delay: 0.5, duration: 0.5 },
              y: { delay: 1, duration: 1.5 },
              x: { delay: 1, duration: 1.5 },
            }}
            className="absolute h-1.5 w-12 bg-AAsecondary rounded"
          />
        ))}

        {/* Central "A" */}
        <motion.span
          initial={{ scale: 0, y: -4, x: -1 }}
          animate={{ scale: 1 }}
          transition={{ scale: { delay: 1.5, duration: 1.5 } }}
          className="text-AAsecondary font-semibold text-6xl"
        >
          A
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Startup;
