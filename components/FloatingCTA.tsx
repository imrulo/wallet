'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const WHATSAPP_LINK = 'https://wa.link/6difl3';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6 mr-2" />
            <span className="hidden sm:inline">Secure This Domain</span>
            <span className="sm:hidden">Contact</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

