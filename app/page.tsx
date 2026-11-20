import type { Metadata } from 'next'
import Image from "next/image"
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
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

function Avatar() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="pointer-events-auto"
    >
      <Image
        src={avatarImage}
        alt="Photo of Laurens Kuiper"
        sizes="4rem"
        className="h-32 w-32 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 dark:ring-2 dark:ring-blue-950 dark:ring-offset-4 dark:ring-offset-zinc-800"
        priority
      />
    </Link>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string,
  href: string,
  icon: React.ComponentType<{ className?: string }>
  children?: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={clsx(className, 'group flex items-center text-sm font-medium text-zinc-500 transition hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300')}
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      {children && (
        <span className="ml-3">{children}</span>
      )}
    </Link>
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
    <>
      <Container className="mt-12 lg:mt-16">
        <div className="max-w-4xl flex flex-col items-center text-center mx-auto">
          <Avatar />
          <div className="mt-6 text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            <p className="text-4xl mb-2">Hi, I&apos;m Laurens Kuiper.</p>
            <h1 className="text-3xl/none">
              Laravel Certified Developer &amp; Statamic Certified Partner.
            </h1>
          </div>
        </div>
        <div className="max-w-3xl flex flex-col items-center text-center mx-auto">
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m a freelance Statamic, Laravel and Filament developer based in Haarlem, the Netherlands, building and running production websites since 2012.
            I build, integrate and maintain websites and apps for agencies and businesses across Europe.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-12 border-t border-zinc-100 pt-10 dark:border-zinc-700/40">
          <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            What I do
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title}>
                <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-12 border-t border-zinc-100 pt-10 dark:border-zinc-700/40">
          <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Selected work
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title}>
                <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {project.href ? (
                    <a
                      href={project.href}
                      className="underline decoration-zinc-500 underline-offset-4 transition hover:decoration-zinc-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.title}
                    </a>
                  ) : project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-3xl flex flex-col items-center text-center mx-auto mt-12 border-t border-zinc-100 pt-10 dark:border-zinc-700/40">
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Tell me what you are building or what needs taking over.
          </p>
          <SocialLink
            href="mailto:laurens@laurenskuiper.com"
            aria-label="Send an email"
            icon={MailIcon}
            className="mt-6"
          >
            laurens@laurenskuiper.com
          </SocialLink>
          <Link
            href="/about"
            className="mt-4 text-sm font-medium text-zinc-500 underline transition hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
          >
            About me
          </Link>
          <div className="mt-6 flex gap-6 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
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
      </Container>
    </>
  );
}
