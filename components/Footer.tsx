import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
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
    <Link
      href={href}
      className="transition hover:text-zinc-400 dark:hover:zinc-300"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 py-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <Link href="https://verifier.certificationforlaravel.org/cafa8da6-212f-4a82-bc21-7c016448bdc2">
                  <Image
                    src={laravelBadge}
                    alt="Certified Senior Laravel Developer"
                    className="ml-6 w-[7.5rem] md:w-[9rem]"
                  />
                </Link>
                <Link href="https://statamic.com/partners/laurens-kuiper">
                  <Image
                    src={statamicBadge}
                    alt="Statamic CMS Partner"
                    className="w-40 md:w-48"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-400 dark:text-zinc-500">
                  <NavLink href="/terms-conditions">Terms & Conditions</NavLink>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; 2020 - {new Date().getFullYear()} Laurens Kuiper. All rights reserved.
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
