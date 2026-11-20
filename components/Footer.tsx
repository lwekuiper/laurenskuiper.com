import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import laravelBadge from '@/images/laravel-badge.png'
import statamicBadge from '@/images/statamic-badge.svg'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="transition-colors hover:text-theme-text">
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 flex-none lg:mt-32">
      <Container>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 border-t border-theme-text py-8 md:grid-cols-12 md:items-center">
          <div className="flex items-center gap-6 md:col-span-3">
            <Link href="https://verifier.certificationforlaravel.org/cafa8da6-212f-4a82-bc21-7c016448bdc2">
              <Image
                src={laravelBadge}
                alt="Laravel Certified Developer"
                sizes="4rem"
                className="w-16"
              />
            </Link>
            <Link href="https://statamic.com/partners/laurens-kuiper">
              <Image
                src={statamicBadge}
                alt="Statamic Certified Partner"
                className="w-24"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-4 font-mono text-xs text-theme-muted sm:flex-row sm:items-center sm:justify-between md:col-span-9">
            <p>
              &copy; 2020 - {new Date().getFullYear()} Laurens Kuiper. All rights reserved.
            </p>
            <div className="flex gap-6">
              <NavLink href="/terms-conditions">Terms & Conditions</NavLink>
              <NavLink href="/privacy-policy">Privacy Policy</NavLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
