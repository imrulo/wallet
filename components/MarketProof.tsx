'use client';

import { motion } from 'framer-motion';

const marketplaces = ['NameBio', 'Afternic', 'Sedo'];

export function MarketProof() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy-900 border-y border-gray-200 dark:border-navy-700">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
            As Seen On
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {marketplaces.map((marketplace, index) => (
              <motion.div
                key={marketplace}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-gray-400 dark:text-gray-500 font-semibold text-lg"
              >
                {marketplace}
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            Comparable sales featured on premium domain marketplaces
          </p>
        </motion.div>
      </div>
    </section>
  );
}

