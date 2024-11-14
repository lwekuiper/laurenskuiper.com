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
import avatarImage from '@/images/avatar.png'

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

export default function Home() {
  return (
    <>
      <Container className="mt-12 lg:mt-16">
        <div className="max-w-3xl flex flex-col items-center text-center mx-auto">
          <Avatar />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            My name is Laurens.<br/>
            Freelance web developer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I´m Laurens Kuiper, an experienced full stack developer based in Haarlem, The Netherlands.
            With 12+ years of experience I specialize in Laravel and Statamic CMS, and am skilled in Livewire, VueJS, Tailwind CSS.
            As proud owner of Fly The Coop, I aim to deliver high-quality web development services.
          </p>
          <SocialLink
            href="mailto:l@urens.me"
            aria-label="Send an email"
            icon={MailIcon}
            className="mt-6"
          >
            l@urens.me
          </SocialLink>
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
