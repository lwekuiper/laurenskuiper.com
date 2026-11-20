import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { MailButton } from '@/components/MailButton'
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
  href,
  children,
  icon: Icon,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-4 text-sm font-medium"
      >
        <Icon className="h-6 w-6 flex-none fill-theme-muted transition-colors group-hover:fill-theme-text" />
        {children}
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <Container className="pt-12 lg:pt-20">
      <h1 className="max-w-5xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        I&apos;m Laurens Kuiper, a freelance Statamic, Laravel and Filament developer based in Haarlem.
      </h1>
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-12 md:grid-rows-[auto_1fr] lg:mt-16">

        <div className="md:col-span-3">
          <Image
            src={portraitImage}
            alt="Photo of Laurens Kuiper"
            sizes="(min-width: 1152px) 16rem, (min-width: 768px) 25vw, 12rem"
            className="aspect-square w-48 object-cover md:w-full"
            priority
          />
        </div>

        <div className="md:col-span-9 md:row-span-2">
          <div className="max-w-2xl space-y-6 text-pretty text-lg lg:text-xl lg:leading-8">
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
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Laravel Certified Developer
            </a>{' '}
            &amp;{' '}
            <a
              href="https://statamic.com/partners/laurens-kuiper"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Statamic Certified Partner
            </a>{' '}
            and a member of the Laravel Certification Exam Committee.
            My own{' '}
            <a
              href="https://statamic.com/creators/lwekuiper"
              className="text-link"
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
          <MailButton className="mt-10" />
        </div>

        <div className="md:col-span-3">
          <ul className="space-y-4">
            <SocialLink href="https://www.linkedin.com/in/lwekuiper/" icon={LinkedInIcon}>
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://github.com/lwekuiper" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://x.com/lwekuiper" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/lwekuiper/" icon={InstagramIcon}>
              Follow on Instagram
            </SocialLink>
          </ul>
        </div>

      </div>
    </Container>
  )
}
