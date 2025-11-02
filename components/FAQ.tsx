'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'Why is this domain valuable?',
    answer:
      'Wallet.charity combines two high-value terms: "wallet" (universal in crypto/blockchain) and "charity" (emotionally resonant, mission-driven). The .charity TLD adds inherent credibility for charitable organizations. With growing interest in crypto philanthropy, this domain offers exceptional brand positioning and SEO potential.',
  },
  {
    question: 'Who benefits most from owning it?',
    answer:
      'Ideal buyers include crypto charity platforms, blockchain-based non-profits, fundraising SaaS companies, impact investment funds, and educational platforms focused on crypto philanthropy. Anyone building a mission-driven brand in the blockchain space would benefit from this memorable, trustworthy domain.',
  },
  {
    question: 'How do I make an offer?',
    answer:
      'Contact us via WhatsApp (https://wa.link/6difl3) or email (imrulo.eth@proton.me) with your offer amount. We respond to all inquiries within 24 hours. Serious buyers can also use the contact form on this page to initiate discussions.',
  },
  {
    question: 'How is ownership transferred securely?',
    answer:
      'All transactions are processed through Escrow.com, the industry standard for domain transfers. Your payment is held in escrow until the domain is successfully transferred to your registrar account. This protects both buyer and seller, ensuring a safe, transparent transaction.',
  },
  {
    question: 'What happens after purchase?',
    answer:
      'Once payment is confirmed and the domain is transferred to your account, you have full ownership and control. You can immediately configure DNS, set up email, and begin building your platform. We provide basic transfer support to ensure a smooth transition.',
  },
  {
    question: 'Is this a one-time opportunity?',
    answer:
      'Premium domains like Wallet.charity are unique assets that cannot be duplicated. Once sold, this exact domain will no longer be available. Given the current market interest and the growing crypto charity sector, securing this domain now positions you ahead of competitors.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about acquiring Wallet.charity
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-xl"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

