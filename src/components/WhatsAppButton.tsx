import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAFE_INFO } from '../data/bakeryData';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
  cafeName?: string;
}

export function WhatsAppButton({
  phoneNumber = CAFE_INFO.rawPhone || '15552345678',
  defaultMessage = `Hello Morning Coffee! 🥐 I'm browsing your bakery menu and would like to ask about today's fresh bakes and pre-orders.`,
  cafeName = CAFE_INFO.name,
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const encoded = encodeURIComponent(defaultMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="relative">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap bg-[#0B3FBF] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-[#E6F55A]/30 select-none pointer-events-none"
            >
              <span>Chat with {cafeName} on WhatsApp</span>
              <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B3FBF] rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={handleWhatsAppClick}
          className="w-16 h-16 rounded-full bg-transparent shadow-2xl flex items-center justify-center cursor-pointer transition-shadow hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/image/WhatsApp%20Green%20Chat%20Icon.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </motion.button>
      </div>
    </div>
  );
}
