import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Footer } from '@/components/Footer'

const description = 'Freelance Laravel, Filament and Statamic developer in Haarlem, Netherlands. I build, integrate and maintain websites and apps for agencies and businesses across Europe.'

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
    images: [{ url: 'https://www.laurenskuiper.com/laurens-kuiper.jpg', width: 800, height: 800, alt: 'Photo of Laurens Kuiper' }],
  },
}

const jsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Laurens Kuiper',
  alternateName: 'Laurens',
  email: 'mailto:laurens@laurenskuiper.com',
  jobTitle: 'Freelance Laravel, Filament and Statamic Developer',
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
  knowsAbout: ['Laravel', 'Filament', 'Statamic', 'Livewire', 'Alpine.js', 'Tailwind CSS'],
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
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">

        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>

        <div className="relative flex w-full flex-col">
          <main className="flex-auto">{children}</main>
          <Footer />
        </div>

      </body>

      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
