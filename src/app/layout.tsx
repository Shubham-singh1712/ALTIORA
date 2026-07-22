import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'ALTIORA — Luxury Digital Agency for Boutique Hotels & Culinary Brands',
  description:
    'Altiora is an elite digital architecture and brand studio. We build bespoke Next.js web flagships, print & QR menu systems, and 4K cinematic reels for luxury hotels, fine dining restaurants, and brands charging ₹1L+ engagements.',
  keywords: [
    'luxury hotel website design',
    'boutique hotel web agency',
    'fine dining menu design',
    'restaurant web development India',
    'hospitality CRO agency',
    '4K culinary reel editing',
    'premium web agency ₹1L+',
  ],
  authors: [{ name: 'Altiora Studio' }],
  creator: 'Altiora',
  metadataBase: new URL('https://altiora.agency'),
  openGraph: {
    title: 'ALTIORA — Luxury Digital Agency for Hospitality Brands',
    description:
      'We engineer bespoke web flagships, high-converting culinary menus, and 4K reels for luxury hotels and fine dining brands.',
    type: 'website',
    url: 'https://altiora.agency',
    locale: 'en_IN',
    siteName: 'ALTIORA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALTIORA — Luxury Digital Agency for Hospitality Brands',
    description:
      'We engineer bespoke web flagships, high-converting culinary menus, and 4K reels for luxury hotels and fine dining brands.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ALTIORA Digital Agency',
  image: 'https://altiora.agency/og-image.jpg',
  '@id': 'https://altiora.agency',
  url: 'https://altiora.agency',
  telephone: '+919876543210',
  priceRange: '₹100000 - ₹500000',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 15.2993,
    longitude: 74.124,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  sameAs: [
    'https://instagram.com/altiora',
    'https://linkedin.com/company/altiora',
  ],
  service: [
    {
      '@type': 'Service',
      name: 'Premium Website Development',
      description: 'Next.js 16 bespoke web flagships for luxury hotels & resorts.',
    },
    {
      '@type': 'Service',
      name: 'Culinary Menu & Brand Design',
      description: 'Print leather layouts and touchless QR digital menus.',
    },
    {
      '@type': 'Service',
      name: 'Reel & Commercial Video Editing',
      description: '4K cinematic short-form video editing for luxury dining.',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

