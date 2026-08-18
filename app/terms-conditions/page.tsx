import type { Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for services provided by Laurens Kuiper.',
}

export default function Terms() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:col-span-2">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Terms & Conditions
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              These terms and conditions govern the provision of services by Laurens Kuiper,
              trading as Fly The Coop, Chamber of Commerce no. 78749778, established in Haarlem,
              the Netherlands.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="max-w-2xl space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Fly The Coop applies the NLdigital Terms 2025, the standard terms and conditions
              for the Dutch digital sector, deposited with the district court of Midden-Nederland,
              location Utrecht.
            </p>
            <p>
              <a
                href="/nldigital-terms-2025-en.pdf"
                className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
              >
                View the NLdigital Terms 2025 (PDF)
              </a>
            </p>

            <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-700/40">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Applicable since 18 August 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
