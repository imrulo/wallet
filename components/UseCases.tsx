'use client';

import { motion } from 'framer-motion';

const useCases = [
  {
    industry: 'Crypto Charity Platform',
    application: 'Launch a dedicated cryptocurrency wallet for charitable donations, enabling transparent, blockchain-verified giving',
    benefit: 'Build instant authority and trust in the crypto philanthropy space',
  },
  {
    industry: 'Blockchain Non-Profit',
    application: 'Create a comprehensive platform for crypto-based fundraising and transparent donation tracking',
    benefit: 'Anchor your digital presence with a memorable, mission-aligned domain',
  },
  {
    industry: 'SaaS Fundraising Tool',
    application: 'Develop a white-label wallet solution for charities and non-profits to accept crypto donations',
    benefit: 'Dominate your niche with a brandable, keyword-rich domain name',
  },
  {
    industry: 'Venture Capital / Impact Fund',
    application: 'Establish a digital foundation for impact investing and crypto-based charitable initiatives',
    benefit: 'Signal commitment to innovation and social responsibility',
  },
  {
    industry: 'Educational Platform',
    application: 'Teach cryptocurrency and blockchain technology within the context of charitable giving',
    benefit: 'Position as the leading resource for crypto philanthropy education',
  },
];

export function UseCases() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Strategic Use Cases
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover how Wallet.charity can power your mission-driven platform
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-navy-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-navy-700">
            <thead>
              <tr className="bg-gradient-to-r from-gold-400 to-gold-600">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Industry
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Strategic Application & Benefit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-navy-700">
              {useCases.map((useCase, index) => (
                <motion.tr
                  key={useCase.industry}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="hover:bg-gray-50 dark:hover:bg-navy-700/50 transition-colors"
                >
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {useCase.industry}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p className="font-medium mb-1">{useCase.application}</p>
                      <p className="text-gold-600 dark:text-gold-400">✓ {useCase.benefit}</p>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

