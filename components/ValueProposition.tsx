'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Brand Authority',
    description: 'Instant trust & credibility in the crypto charity and philanthropy space',
  },
  {
    title: 'SEO Advantage',
    description: 'Strong organic search potential for "wallet charity" and related keywords',
  },
  {
    title: 'Market Versatility',
    description: 'Cross-industry value: crypto platforms, non-profits, fundraising tools',
  },
  {
    title: 'Appreciation',
    description: 'Long-term digital asset growth as the crypto charity market expands',
  },
];

export function ValueProposition() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-navy-800 dark:to-navy-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why <span className="text-gold-500">Wallet.charity</span> is a Strategic Investment
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            This premium domain combines the universal appeal of crypto wallets with the emotional resonance
            of charitable giving — creating a powerful brand foundation for any mission-driven organization
            in the blockchain space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-navy-700"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

