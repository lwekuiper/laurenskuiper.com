import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
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
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-center gap-6">
              {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">Terms & Conditions</NavLink>
              </div> */}
              <Link href="https://statamic.com/partners/laurens-kuiper">
                <Image
                  src={statamicBadge}
                  alt=""
                  className="w-40"
                />
              </Link>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; 2020 - {new Date().getFullYear()} Laurens Kuiper. All rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
