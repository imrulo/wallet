'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg mb-2">
            Made with <span className="text-red-500">❤️</span> by{' '}
            <a
              href="mailto:imrulo.eth@proton.me"
              className="text-gold-400 hover:text-gold-300 transition-colors font-semibold"
            >
              imrulo.eth
            </a>
          </p>
          <p className="text-sm text-gray-400">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="border-t border-navy-700 pt-8 text-sm text-gray-400 space-y-2">
          <p className="text-center">
            <strong>Legal Notice:</strong> This is a domain landing page for sale purposes only. No
            active services are implied. Domain availability may change.
          </p>
          <p className="text-center">
            <strong>Privacy:</strong> We respect your privacy — no cookies, no tracking. This site
            uses no analytics or third-party tracking scripts.
          </p>
        </div>
      </div>
    </footer>
  );
}

