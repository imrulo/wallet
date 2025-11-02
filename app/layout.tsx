import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { FloatingCTA } from '@/components/FloatingCTA';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Acquire Wallet.charity — Premium Domain for Crypto Philanthropy & Charity',
  description: 'Secure Wallet.charity — the definitive digital asset for crypto wallets, blockchain philanthropy, and charity fundraising platforms. High-value domain with strong SEO potential and brand authority.',
  keywords: [
    'wallet.charity',
    'crypto charity',
    'blockchain philanthropy',
    'charity wallet',
    'donation platform',
    'premium domain',
    'crypto fundraising',
  ],
  authors: [{ name: 'imrulo.eth' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Acquire Wallet.charity — Premium Domain for Crypto Philanthropy',
    description: 'The definitive digital asset for crypto wallets, blockchain philanthropy, and charity fundraising platforms.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_BASE_URL || '',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Wallet.charity Premium Domain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acquire Wallet.charity — Premium Domain for Crypto Philanthropy',
    description: 'The definitive digital asset for crypto wallets, blockchain philanthropy, and charity fundraising platforms.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(process.env.NEXT_PUBLIC_BASE_URL && {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}

