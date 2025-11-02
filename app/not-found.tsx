import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-blue-900 to-navy-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gold-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Perhaps you&apos;re interested in acquiring{' '}
          <span className="font-semibold text-gold-400">Wallet.charity</span>?
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold rounded-lg transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

