import React from "react";
import { motion } from "motion/react";
import { ScallopButton } from "./ScallopButton";
import { ScallopDivider } from "./ScallopDivider";
import { CrumbClubBadge, CroissantDoodle, SparkleDoodle } from "./Doodles";

interface HeroProps {
  cafeName: string;
  onExploreMenu: () => void;
}

export function Hero({ cafeName, onExploreMenu }: HeroProps) {
  return (
    <section
      className="relative text-white pt-8 pb-0 overflow-hidden"
      style={{
        backgroundImage: "url('/image/ref-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Area */}
        <div className="relative min-h-[590px] lg:min-h-[660px] flex flex-col justify-between">
          {/* Top Section: Headline + Badge */}
          <div className="relative flex flex-col items-center lg:flex-row lg:items-start justify-between gap-6 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-2xl text-center lg:text-left"
            >
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white drop-shadow-sm">
                A little crust,
                <br />
                <span className="text-white">A lot of joy</span>
              </h1>
            </motion.div>

            {/* Rotating Sticker Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="absolute top-[170px] right-0 self-end lg:static lg:self-start shrink-0 mr-2 lg:mr-10 -mt-2 sm:mt-2"
            >
              <CrumbClubBadge
                text={`${cafeName.split(" ")[0] || "CRUMB"} CLUB`}
                className="w-28 h-28 sm:w-36 sm:h-36"
              />
            </motion.div>
          </div>

          {/* Centerpiece: Croissant + Animated White Swoosh */}
          <div className="absolute left-1/2 top-[27%] w-full -translate-x-1/2 flex items-center justify-center lg:relative lg:left-auto lg:top-auto lg:w-auto lg:translate-x-0 my-0 sm:my-0">
            {/* Floating Croissant Doodle */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -15 }}
              animate={{ opacity: 1, x: 0, rotate: -12 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute left-0 top-[18%] lg:left-16 lg:top-1/4 z-20 block bg-white/10 backdrop-blur-xs p-2 lg:p-3 rounded-2xl border border-white/20 shadow-lg"
            >
              <CroissantDoodle
                className="w-16 h-16 sm:w-20 sm:h-20"
                stroke="#FFFFFF"
              />

              <div className="absolute -top-3 -right-2">
                <SparkleDoodle className="w-6 h-6" fill="#E6F55A" />
              </div>
            </motion.div>

            {/* Main Croissant Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-[92vw] max-w-[420px] sm:max-w-[420px] mx-auto lg:max-w-2xl lg:w-full"
            >
              {/* BACK WHITE SWOOSH */}
              <svg
                viewBox="0 0 1400 520"
                preserveAspectRatio="none"
                className="absolute -top-12 -left-8 w-[120%] h-[140%] lg:-top-16 lg:-left-12 pointer-events-none z-0 overflow-visible"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M -100 300 C 180 440, 360 180, 700 170 S 1050 80, 1150 230"
                  stroke="#FFF9EA"
                  strokeWidth="34"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              {/* CROISSANT IMAGE */}
              <div className="relative z-10">
                <img
                  src="/image/ref-5.png"
                  alt="Golden French butter croissant"
                  className="block w-full h-auto max-h-[420px] object-contain drop-shadow-xl"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* FRONT WHITE SWOOSH */}
              {/* <svg
                viewBox="0 0 1400 520"
                preserveAspectRatio="none"
                className="absolute -top-12 -left-8 w-[120%] h-[140%] lg:-top-16 lg:-left-12 pointer-events-none z-20 overflow-visible"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 650 330 C 450 330, 450 220, 650 200 C 850 180, 900 310, 1100 400 S 1350 470, 1500 400"
                  stroke="#FFF9EA"
                  strokeWidth="34"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg> */}
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="absolute bottom-8 left-4 right-4 flex flex-col items-center gap-4 z-20 lg:static lg:flex-row lg:justify-between lg:gap-6 lg:pt-6 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
            >
              <ScallopButton
                variant="lime"
                size="lg"
                onClick={onExploreMenu}
                className="shadow-xl"
              >
                Explore the menu
              </ScallopButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="max-w-md text-center lg:text-right"
            >
              <p className="text-sm sm:text-base font-medium text-white/90 leading-snug">
                <span className="mr-1.5" role="img" aria-label="croissant">
                  🥐
                </span>
                A neighborhood bakery making slow-fermented bread, buttery
                pastries, and reasons to stop by.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scalloped Bottom Divider */}
      <div className="w-full relative z-30">
        <ScallopDivider color="#0B3FBF" direction="down" />
      </div>
    </section>
  );
}
