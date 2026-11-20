import type { Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for services provided by Laurens Kuiper.',
  alternates: { canonical: '/terms-conditions' },
}

export default function Terms() {
  return (
    <Container className="pt-12 lg:pt-20">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        Terms & Conditions
      </h1>
      <div className="mt-12 grid grid-cols-1 gap-x-8 md:grid-cols-12 lg:mt-16">
        <div className="max-w-xl md:col-span-9 md:col-start-4">
          <p className="text-lg">
            These terms and conditions govern the provision of services by Laurens Kuiper,
            sole proprietor, Chamber of Commerce no. 78749778, established in Haarlem,
            the Netherlands.
          </p>
          <div className="mt-12 space-y-10 text-base">
            <p>
              Laurens Kuiper applies the NLdigital Terms 2025, the standard terms and conditions
              for the Dutch digital sector, deposited with the district court of Midden-Nederland,
              location Utrecht.
            </p>
            <p>
              <a
                href="/nldigital-terms-2025-en.pdf"
                className="text-link"
              >
                View the NLdigital Terms 2025 (PDF)
              </a>
            </p>

            <p className="border-t border-theme-rule pt-6 font-mono text-xs text-theme-muted">
              Applicable since 18 August 2026.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
