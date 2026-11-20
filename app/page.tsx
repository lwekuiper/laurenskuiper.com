import type { Metadata } from 'next'
import Image from "next/image"
import Link from 'next/link'

import { Container } from '@/components/Container'
import { MailButton } from '@/components/MailButton'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import avatarImage from '@/images/avatar.jpg'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

function SocialLink({
  href,
  icon: Icon,
  ...props
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  'aria-label': string
}) {
  return (
    <Link href={href} className="group" {...props}>
      <Icon className="h-6 w-6 fill-theme-muted transition-colors group-hover:fill-theme-text" />
    </Link>
  )
}

function Section({
  title,
  items,
  large = false,
}: {
  title: string
  items: { title: string, body: string, href?: string }[]
  large?: boolean
}) {
  return (
    <section className="mt-24 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-theme-text pt-6 md:grid-cols-12 md:items-baseline lg:mt-32">
      <h2 className="font-mono text-xs uppercase tracking-wide text-theme-muted md:col-span-3">
        {title}
      </h2>
      <ul role="list" className="divide-y divide-theme-rule md:col-span-9">
        {items.map((item) => (
          <li
            key={item.title}
            className="grid grid-cols-1 gap-x-8 gap-y-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-9 sm:items-baseline"
          >
            <h3 className={`${large ? 'text-2xl tracking-tight' : 'text-lg'} font-medium sm:col-span-3`}>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              ) : item.title}
            </h3>
            <p className="text-pretty text-base text-theme-muted sm:col-span-6">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const services = [
  {
    title: 'Statamic sites',
    body: 'Editor-friendly Statamic builds, multi-site and multilingual setups and moves from WordPress.',
  },
  {
    title: 'Laravel and Filament apps',
    body: 'Laravel applications with Filament admin panels, payments and subscriptions, handed over documented and tested.',
  },
  {
    title: 'Integrations',
    body: 'Your site connected to the systems you already run: CRMs, ticketing, shops and payments. My own Statamic addons do this for ActiveCampaign, HubSpot, Acumbamail and Zapier.',
  },
  {
    title: 'Maintenance and takeovers',
    body: 'Upgrades, security updates and monitoring for live sites, as an ongoing agreement or per task. I also take over existing Laravel and Statamic sites when their developer moves on.',
  },
]

const projects = [
  {
    title: 'UD Ibiza',
    href: 'https://www.ibizaud.com',
    body: 'The official site and online shop of the football club, on Statamic. The full news archive moved over in two languages and the shop took orders from day one.',
  },
  {
    title: 'Unlock Adventures',
    href: 'https://www.unlockadventures.nl',
    body: 'A Statamic site for an escape room company, with room pages, price tables the team manages themselves and booking built into the pages.',
  },
  {
    title: 'Statamic addons',
    href: 'https://statamic.com/creators/lwekuiper',
    body: 'My own commercial addons on the Statamic Marketplace. They send form submissions straight to ActiveCampaign, HubSpot, Acumbamail and Zapier.',
  },
  {
    title: 'Ushuaïa Ibiza',
    body: 'The Statamic site of the club, which I built and maintained season after season. Editors published events and line-ups themselves and tickets were ordered on the site itself.',
  },
]

export default function Home() {
  return (
    <Container className="pt-12 lg:pt-20">
      <p className="text-7xl font-semibold tracking-tighter sm:text-8xl lg:text-9xl">
        <span className="block">Hi, I&apos;m</span>{' '}
        <span className="block">Laurens Kuiper.</span>
      </p>
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-12 lg:mt-16">
        <div className="md:col-span-3">
          <Image
            src={avatarImage}
            alt="Photo of Laurens Kuiper"
            sizes="(min-width: 1152px) 16rem, (min-width: 768px) 25vw, 12rem"
            className="aspect-square w-48 object-cover md:w-full"
            priority
          />
        </div>
        <div className="flex flex-col justify-between gap-y-6 md:col-span-9">
          <h1 className="text-balance text-3xl font-medium tracking-tight lg:text-5xl lg:leading-tight">
            Laravel Certified Developer &amp; Statamic Certified Partner.
          </h1>
          <p className="max-w-xl text-pretty text-lg">
            I&apos;m a freelance Statamic, Laravel and Filament developer based in Haarlem, the Netherlands, building and running production websites since 2012.
            I build, integrate and maintain websites and apps for agencies and businesses across Europe.
          </p>
        </div>
      </div>
      <Section title="What I do" items={services} />
      <Section title="Selected work" items={projects} large />
      <section className="mt-24 border-t border-theme-text pt-10 lg:mt-32 lg:pt-12">
        <p className="max-w-[26ch] text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Tell me what you are building or what needs taking over.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-8">
          <MailButton />
          <div className="flex items-center gap-10">
            <Link href="/about" className="text-link text-base font-medium">
              About me
            </Link>
            <div className="flex gap-6">
              <SocialLink
                href="https://www.linkedin.com/in/lwekuiper/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
              <SocialLink
                href="https://github.com/lwekuiper"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://x.com/lwekuiper"
                aria-label="Follow on X"
                icon={XIcon}
              />
              <SocialLink
                href="https://www.instagram.com/lwekuiper/"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
