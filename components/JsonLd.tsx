export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Wallet.charity',
    description:
      'Premium domain name for crypto charity platforms, blockchain philanthropy, and fundraising platforms.',
    category: 'Domain Name',
    brand: {
      '@type': 'Brand',
      name: 'Wallet.charity',
    },
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '1',
      priceCurrency: 'USD',
      priceRange: '$5,000-$15,000+',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Person',
        name: 'imrulo.eth',
        email: 'imrulo.eth@proton.me',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

