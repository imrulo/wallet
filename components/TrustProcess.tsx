'use client';

import { motion } from 'framer-motion';

export function TrustProcess() {
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
            Secure Transaction Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your acquisition is protected by industry-leading security standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-navy-700"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Escrow.com Protected
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              All transactions are processed through{' '}
              <span className="font-semibold">Escrow.com</span> — the world&apos;s most trusted escrow
              service for domain transfers. Your funds are held securely until ownership is
              successfully transferred to your account.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-navy-700"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Fast & Transparent
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Domain transfers typically complete within{' '}
              <span className="font-semibold">24-48 hours</span> after payment confirmation. You&apos;ll
              receive real-time updates throughout the process, ensuring complete transparency from
              offer to ownership.
            </p>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gold-400 to-gold-600 p-8 rounded-xl text-white shadow-xl"
        >
          <div className="flex items-start">
            <svg
              className="w-8 h-8 mr-4 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
            <div>
              <p className="text-lg italic mb-2">
                &quot;Flawless acquisition experience — fast, secure, transparent. The domain transfer
                completed exactly as promised, and the entire process was handled with
                professionalism.&quot;
              </p>
              <p className="text-sm opacity-90">— Verified Domain Buyer</p>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 dark:bg-navy-700 rounded-lg border border-blue-200 dark:border-navy-600">
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Portfolio Offer:</span> Interested in multiple domains?
              Ask about bundle pricing.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

