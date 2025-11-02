'use client';

import { motion } from 'framer-motion';

const metrics = {
  searchVolume: '8,100',
  cpc: '$2.45',
};

const comparableSales = [
  { domain: 'Charity.com', price: '$15,000', year: '2023' },
  { domain: 'Give.crypto', price: '$12,000', year: '2023' },
  { domain: 'Wallet.giving', price: '$8,500', year: '2022' },
];

export function DataValidation() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-navy-900 dark:to-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Market Data & Validation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Real metrics that demonstrate the value of this domain
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gold-400 to-gold-600 p-8 rounded-2xl text-white text-center shadow-xl"
          >
            <div className="text-5xl font-bold mb-2">{metrics.searchVolume}</div>
            <div className="text-lg opacity-90">Monthly Search Volume</div>
            <div className="text-sm opacity-75 mt-1">&quot;wallet charity&quot; + related terms</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white text-center shadow-xl"
          >
            <div className="text-5xl font-bold mb-2">${metrics.cpc}</div>
            <div className="text-lg opacity-90">Average CPC</div>
            <div className="text-sm opacity-75 mt-1">Cost per click (estimated)</div>
          </motion.div>
        </div>

        {/* Comparable Sales Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-navy-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-navy-700"
        >
          <div className="px-6 py-4 bg-gray-50 dark:bg-navy-700 border-b border-gray-200 dark:border-navy-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Comparable Premium Domain Sales
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-navy-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Domain
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Sale Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-navy-700">
                {comparableSales.map((sale, index) => (
                  <tr
                    key={sale.domain}
                    className="hover:bg-gray-50 dark:hover:bg-navy-700/50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {sale.domain}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {sale.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {sale.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Estimated Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gold-600 dark:text-gold-400">
              Estimated Market Value Range:
            </span>{' '}
            Comparable sales suggest an estimated value range of{' '}
            <span className="font-bold text-gray-900 dark:text-white">$5,000–$15,000+</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

