'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { submitContact } from '@/app/actions/contact';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-navy-800 dark:to-navy-900">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Make an Offer?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Prefer to contact us directly? Fill out the form below or use WhatsApp/Email above.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-navy-700"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent dark:bg-navy-700 dark:text-white transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent dark:bg-navy-700 dark:text-white transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent dark:bg-navy-700 dark:text-white transition-colors resize-none"
                placeholder="Your message or offer..."
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-300">
                  ✓ Message sent successfully! We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-800 dark:text-red-300">
                  ✗ Something went wrong. Please try again or contact us directly via email.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Privacy: We respect your privacy — no tracking, no cookies, no analytics. Your
              information is used solely to respond to your inquiry.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

