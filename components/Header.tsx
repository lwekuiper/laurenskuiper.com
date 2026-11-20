import Link from 'next/link'

import { Container } from '@/components/Container'

export function Header() {
  return (
    <header className="flex-none">
      <Container className="flex items-center justify-between py-6 font-mono text-sm">
        <Link href="/">laurenskuiper.com</Link>
        <nav>
          <Link
            href="/about"
            className="text-theme-muted transition-colors hover:text-theme-text"
          >
            About
          </Link>
        </nav>
      </Container>
    </header>
  )
}
