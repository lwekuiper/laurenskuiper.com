import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";

import "./globals.css";

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const description = 'Freelance Statamic, Laravel and Filament developer in Haarlem, Netherlands. I build, integrate and maintain websites and apps for agencies and businesses across Europe.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.laurenskuiper.com'),
  title: {
    template: '%s | Laurens Kuiper',
    default: 'Laurens Kuiper | Laravel Certified Developer & Statamic Certified Partner',
  },
  description,
  openGraph: {
    title: 'Laurens Kuiper | Laravel Certified Developer & Statamic Certified Partner',
    description,
    siteName: 'Laurens Kuiper',
    type: 'website',
  },
}

const jsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Laurens Kuiper',
  alternateName: 'Laurens',
  email: 'mailto:laurens@laurenskuiper.com',
  jobTitle: 'Freelance Statamic, Laravel and Filament Developer',
  url: 'https://www.laurenskuiper.com',
  sameAs: [
    'https://www.linkedin.com/in/lwekuiper/',
    'https://github.com/lwekuiper',
    'https://x.com/lwekuiper',
    'https://www.instagram.com/lwekuiper/',
    'https://statamic.com/partners/laurens-kuiper',
    'https://statamic.com/creators/lwekuiper',
    'https://packagist.org/users/lwekuiper/'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Haarlem',
    addressCountry: 'NL'
  },
  description,
  knowsAbout: ['Statamic', 'Laravel', 'Filament', 'Livewire', 'Alpine.js', 'Tailwind CSS'],
  knowsLanguage: ['nl', 'en', 'es'],
  nationality: 'NL',
  image: 'https://www.laurenskuiper.com/laurens-kuiper.jpg',
  subjectOf: [
    {
      '@type': 'CreativeWork',
      name: 'UD Ibiza',
      url: 'https://www.ibizaud.com'
    },
    {
      '@type': 'CreativeWork',
      name: 'Unlock Adventures',
      url: 'https://www.unlockadventures.nl'
    },
    {
      '@type': 'SoftwareApplication',
      name: 'ActiveCampaign Addon',
      url: 'https://statamic.com/addons/lwekuiper/activecampaign'
    },
    {
      '@type': 'SoftwareApplication',
      name: 'HubSpot Addon',
      url: 'https://statamic.com/addons/lwekuiper/hubspot'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-theme-bg font-sans text-theme-text">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />

        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />

      </body>

      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
