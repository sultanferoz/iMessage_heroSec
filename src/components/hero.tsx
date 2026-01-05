"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import msglogo from "../../public/msglogo.svg";
import clouds from "../../public/clouds.png";
import apple from "../../public/apple.svg";
import arrow from "../../public/arrow.svg";
import vector from "../../public/Vector (1).svg";

function Bird({
  variant,
  delay = 0,
  size = 62,
}: {
  variant: "leftToTopRight" | "rightToTopLeft" | "middleUp";
  delay?: number;
  size?: number;
}) {
  const paths = {
    leftToTopRight: {
      x: ["-18vw", "25vw", "70vw", "115vw"],
      y: ["92vh", "60vh", "30vh", "-12vh"],
      rotate: [-6, 2, -2, 0],
      scaleX: 1,
      duration: 11.5,
    },
    rightToTopLeft: {
      x: ["115vw", "75vw", "35vw", "-20vw"],
      y: ["94vh", "58vh", "28vh", "-14vh"],
      rotate: 0,
      scaleX: -1,
      duration: 11.5,
    },
    middleUp: {
      x: ["-5vw", "40vw", "95vw"],
      y: ["60vh", "30vh", "8vh"],
      rotate: [0, 3, 0],
      scaleX: 1,
      duration: 13,
    },
  };

  return (
    <motion.img
      src="/bird3.gif"
      alt="bird"
      width={size}
      height={size}
      className="absolute pointer-events-none"
      style={{ top: 0, left: 0 }}
      animate={{
        x: paths[variant].x,
        y: paths[variant].y,
        rotate: paths[variant].rotate,
        scaleX: paths[variant].scaleX,
      }}
      transition={{
        duration: paths[variant].duration,
        repeat: Infinity,
        repeatType: "loop", // ← continuous looping
        ease: "linear", // ← no easing, uniform motion
        delay,
      }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden ">
     
      <Bird variant="leftToTopRight" delay={0} size={60} />
      <Bird variant="leftToTopRight" delay={2.3} size={74} />

      <Bird variant="rightToTopLeft" delay={1.1} size={66} />
      <Bird variant="rightToTopLeft" delay={3.1} size={76} />

      <Bird variant="middleUp" delay={1.7} size={64} />

      <div className="relative flex flex-col items-center gap-4 z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
         <Image
          src={vector}
          alt="vector"
          className="absolute left-2  sm:-left-2 md:-left-14 lg:-left-44  xl:-left-60 top-22"
        ></Image>
        <Image
          src={vector}
          alt="vector"
          className="absolute left-8 sm:left-6 md:-left-6 lg:-left-10  xl:-left-25 top-35"
        ></Image>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-card mb-4 sm:mb-6 text-ring px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm"
        >
          <Image src={msglogo} alt="msglogo" />
          <p>#1 iMessage Automation Tool</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-[64px] font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-[#007AFF]">iMessage</span> Automation
          <br />
          for Teams and AI
          <br />
          Workflows.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-slate-600"
        >
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number — securely running on your Mac or Mac Mini.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 sm:mt-4"
        >
          <Button className="px-5 py-2.5 bg-[#007AFF] hover:bg-[#0066D6] text-white rounded-full shadow-xl shadow-blue-500/20">
            Get Started
          </Button>

          <Button
            variant="outline"
            className="px-5 py-2.5 bg-white/60 backdrop-blur border-[#E5E5EA] rounded-full flex items-center gap-3"
          >
            <Image src={apple} alt="apple_logo" />
            <span className="border-l pl-2 text-sm sm:text-base">
              Download the Mac app
            </span>
          </Button>
        </motion.div>
        <Image
          src={vector}
          alt="vector"
          className="absolute right-2  sm:-right-8 md:-right-14 lg:-right-20  xl:-right-40 top-60"
        ></Image>
        <Image
          src={vector}
          alt="vector"
          className="absolute right-8 sm:-right-2 md:-right-6 lg:-right-10  xl:-right-28 top-28"
        ></Image>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0">
        <Image src={clouds} alt="clouds" className="w-full h-auto" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm font-semibold text-[#1D2026]"
        >
          <span className="text-xs sm:text-sm md:text-base">
            Scroll to learn more
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Image src={arrow} alt="arrow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
