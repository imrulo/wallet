'use client';

import { motion } from 'framer-motion';
import { TwitterIcon } from './icons/TwitterIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

const DOMAIN_NAME = 'Wallet.charity';
const SHARE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://wallet-charity-landing.vercel.app';
const SHARE_TEXT = `Check out this premium domain opportunity: ${DOMAIN_NAME} — Perfect for crypto charity platforms and blockchain philanthropy!`;

const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`;
const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`;

export function SocialShare() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy-900 border-y border-gray-200 dark:border-navy-700">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Share This Opportunity
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Know someone who might be interested? Share this premium domain listing with your network.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-6 py-3 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <TwitterIcon className="w-5 h-5 mr-2" />
              Share on X
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-6 py-3 bg-[#0077B5] hover:bg-[#006399] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <LinkedInIcon className="w-5 h-5 mr-2" />
              Share on LinkedIn
            </a>
          </div>

          {/* OG Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-navy-800 border border-gray-300 dark:border-navy-600 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-navy-900 to-blue-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="text-2xl font-bold mb-2">{DOMAIN_NAME}</h4>
                    <p className="text-sm opacity-90">Premium Domain for Crypto Philanthropy</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">
                  {SHARE_URL}
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Acquire {DOMAIN_NAME} — Premium Domain
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  The definitive digital asset for crypto wallets, blockchain philanthropy, and charity
                  fundraising platforms.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
              Preview of how this page appears when shared on social media
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

