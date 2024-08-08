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

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-12 lg:mt-16">
        <div className="max-w-2xl flex flex-col items-center text-center mx-auto">
          <Avatar />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            My name is Laurens.<br/>
            Senior full stack developer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I´m Laurens Kuiper, a senior full stack developer based in Haarlem, The Netherlands.
            With 10+ years of experience I specialize in Laravel and Statamic CMS, and am skilled in NextJS, React, and Vue.
            As proud owner of Fly The Coop, I aim to deliver high-quality web development services.
          </p>
          <div className="mt-6 flex gap-6">
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
            <SocialLink
              href="https://github.com/lwekuiper"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/lwekuiper/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
