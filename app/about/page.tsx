import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

export const metadata: Metadata = {
  title: 'About',
  description: 'Laurens Kuiper is a freelance Statamic, Laravel and Filament developer based in Haarlem, the Netherlands, building and running production websites since 2012.',
  alternates: { canonical: '/about' },
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
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

export default function About() {
  return (
    <Container className="mt-16 sm:mt-24">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">

        <div className="lg:pr-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Photo of Laurens Kuiper"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>

        <div className="lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Laurens Kuiper, a freelance Statamic, Laravel and Filament developer based in Haarlem.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Since 2012 I have been building and running production websites,
              starting with eight years leading the IT department of The Night
              League in Ibiza. My work today is editor-friendly Statamic sites,
              Laravel apps with Filament admin panels and the integrations that
              connect them to CRMs, ticketing, shops and payments.
            </p>
            <p>
              Agencies bring me in as an embedded developer on their client
              work. Businesses hire me directly for a new build, for taking over
              an existing site or for ongoing maintenance.
            </p>
            <p>
              I&apos;m a{' '}
              <a
                href="https://verifier.certificationforlaravel.org/cafa8da6-212f-4a82-bc21-7c016448bdc2"
                className="underline text-blue-400 transition hover:text-zinc-300"
                target="_blank"
                rel="noreferrer"
              >
                Laravel Certified Developer
              </a>{' '}
              &amp;{' '}
              <a
                href="https://statamic.com/partners/laurens-kuiper"
                className="underline text-blue-400 transition hover:text-zinc-300"
                target="_blank"
                rel="noreferrer"
              >
                Statamic Certified Partner
              </a>{' '}
              and a member of the Laravel Certification Exam Committee.
              My own{' '}
              <a
                href="https://statamic.com/creators/lwekuiper"
                className="underline text-blue-400 transition hover:text-zinc-300"
                target="_blank"
                rel="noreferrer"
              >
                Statamic addons
              </a>{' '}
              are on the Marketplace.
            </p>
            <p>
              Working together starts with a short call to understand what you
              are trying to build. From there I give you a clear scope, keep you
              updated as work progresses and hand over code that is documented
              and tested well enough for someone else to pick up.
            </p>
          </div>
        </div>

        <div className="lg:pr-20">
          <ul>
            <SocialLink href="https://www.linkedin.com/in/lwekuiper/" icon={LinkedInIcon}>
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://github.com/lwekuiper" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://x.com/lwekuiper" icon={XIcon} className="mt-4">
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/lwekuiper/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:laurens@laurenskuiper.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              laurens@laurenskuiper.com
            </SocialLink>
          </ul>
        </div>

      </div>
    </Container>
  )
}
