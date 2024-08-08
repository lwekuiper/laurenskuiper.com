import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.jpg'

function AvatarContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10',
      )}
      {...props}
    />
  )
}

function Avatar({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  large?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        priority
      />
    </Link>
  )
}

export function Header() {
  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <Container
        className="top-0 order-last -mb-3 pt-3"
        style={{
          position:
            'var(--header-position)' as React.CSSProperties['position'],
        }}
      >
        <div
          className="top-[var(--avatar-top,theme(spacing.3))] w-full"
          style={{
            position:
              'var(--header-inner-position)' as React.CSSProperties['position'],
          }}
        >
          <div className="relative">
            <AvatarContainer
              className="absolute left-0 top-3 origin-left transition-opacity"
              style={{
                opacity: 'var(--avatar-border-opacity, 0)',
                transform: 'var(--avatar-border-transform)',
              }}
            />
            <Avatar
              large
              className="block h-16 w-16 origin-left"
              style={{ transform: 'var(--avatar-image-transform)' }}
            />
          </div>
        </div>
      </Container>
    </header>
  )
}
