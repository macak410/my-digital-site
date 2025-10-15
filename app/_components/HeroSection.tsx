'use client';

import { ChevronRight, Download, Mail, MapPin } from "lucide-react";
import ShinyButton from "./ui/ShinyButton";
import { AnimatedTooltip } from "./ui/Tooltip";
import { tooltipItems } from "../_lib/constants";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerate";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Background grid */}
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div
        // 👇 mobile = pt-32, desktop = pt-40
        className="pb-0 pt-32 sm:pt-40 sm:min-h-screen flex flex-col items-center justify-center relative"
        id="#home"
      >
        {/* Slika + pozdrav + status */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 sm:-mt-20">
          {/* Slika */}
          <div
            className="slika w-28 h-28 relative rounded-full overflow-hidden border-4 
            border-stone-400 
            dark:border-stone-700 
            shadow-[0_0_6px_8px_rgba(120,120,120,0.2)] 
            dark:shadow-[0_0_6px_8px_rgba(120,120,120,0.2)] transition-all duration-300 
            hover:shadow-[0_0_20px_10px_rgba(120,120,120,0.5)] 
            dark:hover:shadow-[0_0_20px_8px_rgba(120,120,120,0.5)]"
          >
            <Image
              src="/imgs/avatars/tomislav.jpg"
              alt="Tomislav Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Tekst i status */}
          <div className="tekst flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-2xl font-semibold mb-3">
              Hey, I&apos;m Tomislav <span className="wave-hover text-3xl align-middle">👋</span>
            </h2>

            <a
              href="mailto:macak410@gmail.com"
              aria-label="Contact Tomislav via email"
              className="flex items-center gap-3 group"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Zelena točkica */}
              <div className="green-dot w-3 h-3 rounded-full bg-green-500" />

              {/* Tekst s hover efektom */}
              <div className="relative overflow-hidden h-7 min-w-[160px]">
                <div className="relative w-full h-full">
                  <AnimatePresence mode="wait">
                    {!hovered ? (
                      <motion.span
                        key="available"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute left-0 top-0 w-full flex items-center gap-1 text-gray-500 font-medium text-lg will-change-transform"
                      >
                        Available for work
                      </motion.span>
                    ) : (
                      <motion.span
                        key="reach"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute left-0 top-0 w-full flex items-center gap-1 text-gray-500 font-medium text-lg will-change-transform"
                      >
                        Reach out <Mail className="w-4 h-4 ml-1" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Glavni sadržaj hero sekcije */}
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          <p className="uppercase font-bold text-sm tracking-widest flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            Based In Osijek, Croatia
            <Image
              src="/icons/croatia-flag.svg"
              alt="Flag of Croatia"
              width={16}
              height={12}
              className="ml-1"
            />
          </p>

          <TextGenerateEffect
            words="Quality Design & Web Development Synergy"
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide"
          />

          <p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
            Hi, I&apos;m Tomislav, I create intuitive, visually stunning and
            highly functional web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
            </ShinyButton>

            <a
              href="/resume/moj_cv.pdf"
              download
              className="flex items-center gap-2.5 group"
            >
              <Download className="text-primary" />
              <span className="group-hover:text-white/70 transition-colors duration-200 font-semibold">
                Download CV
              </span>
            </a>
          </div>

          <div className="flex flex-row items-center justify-center mb-10 w-full mt-8">
            {/* <AnimatedTooltip items={tooltipItems} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;