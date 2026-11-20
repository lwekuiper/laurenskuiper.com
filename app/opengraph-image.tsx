import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Laurens Kuiper, Laravel Certified Developer & Statamic Certified Partner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const portrait = await readFile(join(process.cwd(), 'public/laurens-kuiper.jpg'))
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 72,
          backgroundColor: '#18181b',
          color: '#f4f4f5',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 660, height: '100%' }}>
          <div style={{ display: 'flex', fontSize: 26, color: '#a1a1aa' }}>laurenskuiper.com</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>Laurens Kuiper</div>
            <div style={{ display: 'flex', marginTop: 20, fontSize: 36, lineHeight: 1.3, color: '#e4e4e7' }}>
              Laravel Certified Developer & Statamic Certified Partner
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 26, lineHeight: 1.4, color: '#a1a1aa' }}>
            Freelance Statamic, Laravel and Filament developer in Haarlem, the Netherlands
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- next/og renders plain img elements only */}
        <img src={portraitSrc} width={340} height={340} style={{ borderRadius: 170, border: '6px solid #3f3f46' }} />
      </div>
    ),
    size,
  )
}
