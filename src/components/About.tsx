import React from 'react';
import { motion } from 'motion/react';
import { SparkleDoodle } from './Doodles';
import { ScallopButton } from './ScallopButton';

interface AboutProps {
  cafeName: string;
  onOurBakeryClick: () => void;
}

export function About({ cafeName, onOurBakeryClick }: AboutProps) {
  return (
    <section id="about" className="bg-[#FFF8E7] py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered 2-line Big Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#0B3FBF] tracking-tight leading-[1.05]">
            A little flour.
            <br />
            A lot of Sunday.
          </h2>
        </motion.div>

        {/* Content Block: Doodle + 2 Short Paragraphs + Our Bakery Button */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column / Bakery Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-full max-w-md">
              <img
                src="/image/Fresh%20Croissants%20and%20Cosy%20Caf%C3%A9%20Latte.png"
                alt="Freshly baked croissants served with a cosy café latte"
                className="aspect-[4/3] w-full rounded-3xl border-4 border-white object-cover shadow-xl"
                loading="lazy"
              />
              <div className="absolute -top-3 -right-3">
                <SparkleDoodle className="w-7 h-7" fill="#0B3FBF" />
              </div>
            </div>
            <span className="mt-3 text-xs uppercase tracking-widest font-semibold text-[#0B3FBF]/70">
              Stoneground & Hand-shaped
            </span>
          </motion.div>

          {/* Right Column / Paragraphs & Scalloped Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-7 space-y-6 text-[#0B3FBF]"
          >
            <p className="text-lg sm:text-xl font-medium leading-relaxed">
              We&apos;re <strong className="font-bold underline decoration-[#E6F55A] decoration-4 underline-offset-4">{cafeName}</strong>, a neighborhood bakery for slow mornings, quick coffee stops, and the warm pastry you find yourself daydreaming about all afternoon.
            </p>
            <p className="text-base sm:text-lg text-[#0B3FBF]/85 leading-relaxed">
              We give our wild starter time to develop, our golden sourdough loaves a shatteringly crisp crust, and our counter a little something for everyone. Come for your usual flat white. Leave with a fresh warm loaf and an accidental box of pastries.
            </p>
            <div className="pt-2">
              <ScallopButton
                variant="cobalt"
                size="md"
                onClick={onOurBakeryClick}
              >
                Our bakery
              </ScallopButton>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
