import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s - Laurens Kuiper',
    default: 'Laurens Kuiper - Laravel Certified Developer & Statamic CMS partner',
  },
  description: "I'm an experienced full stack developer based in Haarlem, The Netherlands. With 12+ years of experience I specialize in Laravel and Statamic CMS, and am skilled in Livewire, Alpine.js, VueJS, Tailwind CSS and GSAP.",
}

const jsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Laurens Kuiper',
  alternateName: 'Laurens',
  email: 'mailto:l@urens.me',
  jobTitle: 'Senior Software Engineer',
  url: 'https://www.laurenskuiper.com',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  },
  sameAs: [
    'https://www.linkedin.com/in/lwekuiper',
    'https://github.com/lwekuiper',
    'https://twitter.com/lwekuiper',
    'https://instagram.com/lwekuiper'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Haarlem',
    addressCountry: 'NL'
  },
  description: 'Senior software engineer with a specialization in Laravel, Statamic CMS and Vue.js.',
  knowsAbout: ['Laravel', 'Statamic CMS', 'Livewire', 'Vue.js', 'Tailwind CSS', 'GSAP', 'DevOps'],
  knowsLanguage: ['nl', 'en', 'es'],
  nationality: 'NL',
  image: 'https://www.laurenskuiper.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.98f1710c.png&w=3840',
  subjectOf: [
    {
      '@type': 'CreativeWork',
      name: 'Ushuaïa Ibiza',
      url: 'https://www.theushuaiaexperience.com/en/club'
    },
    {
      '@type': 'CreativeWork',
      name: 'Playa Soleil',
      url: 'https://www.playasoleil.com'
    },
    {
      '@type': 'SoftwareApplication',
      name: 'ActiveCampaign Addon',
      url: 'https://statamic.com/addons/lwekuiper/activecampaign'
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
