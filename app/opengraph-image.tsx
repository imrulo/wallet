import { ImageResponse } from 'next/og';

export const alt = 'Wallet.charity Premium Domain';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0369a1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#fbbf24',
          }}
        >
          Wallet.charity
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 'normal',
            color: '#e5e7eb',
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Premium Domain for Crypto Philanthropy & Charity
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

