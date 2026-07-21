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
  title: 'Altiora — Premium Digital Agency for Hospitality Brands',
  description:
    'Altiora is a premium creative agency helping hotels, restaurants, and cafés elevate their digital presence through beautiful websites, stunning menus, and engaging visual content.',
  keywords: [
    'hotel website design',
    'restaurant website',
    'cafe branding',
    'hospitality digital agency',
    'menu design',
    'reel editing',
    'luxury web design India',
  ],
  authors: [{ name: 'Altiora' }],
  creator: 'Altiora',
  openGraph: {
    title: 'Altiora — Premium Digital Agency for Hospitality Brands',
    description:
      'We create premium websites, stunning menus, and engaging visual content for hotels, restaurants, and cafés.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Altiora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altiora — Premium Digital Agency for Hospitality Brands',
    description:
      'We create premium websites, stunning menus, and engaging visual content for hotels, restaurants, and cafés.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
