'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { EmailIcon } from './icons/EmailIcon';

const DOMAIN_NAME = 'Wallet.charity';
const WHATSAPP_LINK = 'https://wa.link/6difl3';
const EMAIL_LINK = 'mailto:imrulo.eth@proton.me';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-blue-900 to-navy-900 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt="Charity and philanthropy background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Acquire <span className="text-gold-400">{DOMAIN_NAME}</span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-200 mt-4 block">
              The Definitive Digital Asset for Crypto Philanthropy & Charity
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Own the perfect domain for crypto wallets, blockchain philanthropy, and charity fundraising platforms.
            Instant brand authority, unmatched memorability, and powerful SEO potential.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Secure This Domain
            </a>

            <a
              href={EMAIL_LINK}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:border-white/40"
            >
              <EmailIcon className="w-5 h-5 mr-2" />
              Make an Offer
            </a>
          </motion.div>

          {/* Scarcity Indicator */}
          <motion.p
            className="text-sm text-gold-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            ⚡ High-interest asset — inquiries received this week
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

