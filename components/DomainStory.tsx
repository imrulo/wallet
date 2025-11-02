'use client';

import { motion } from 'framer-motion';

export function DomainStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-navy-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-navy-900 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200 dark:border-navy-700"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Domain Provenance
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Originally registered in{' '}
              <span className="font-semibold text-gold-600 dark:text-gold-400">2020</span>, this domain
              has remained privately held and meticulously preserved — now{' '}
              <span className="font-semibold">exclusively available for acquisition</span>.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The .charity TLD extension was specifically created for charitable organizations and
              fundraising platforms, adding inherent credibility and trust to any brand. Combined with
              &quot;Wallet&quot; — a term synonymous with crypto and financial technology — this domain represents
              a unique intersection of blockchain innovation and social impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

