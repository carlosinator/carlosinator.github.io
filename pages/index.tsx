import Image from 'next/image'
import Head from 'next/head'
import { updates, type Update } from '../data/updates'
import photoPlacementData from '../data/photoPlacements.json'
import React, { type CSSProperties } from 'react'

const links = [
  { label: 'x', href: 'https://x.com/carlos_vonessen' },
  { label: 'github', href: 'https://github.com/carlosinator' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/carlos-vonessen-8265571bb/' },
  { label: 'feedback', href: 'https://www.admonymous.co/carlosinator' },
]

// Hand-placed thumbnails (data/photoPlacements.json): offset is horizontal px from the default
// position (negative moves toward the text, max ~168 before the 960px frame ends), y is vertical
// px relative to the entry.
type Placement = { offset: number; y: number; scale?: number }
const photoPlacements: Record<string, Placement> = photoPlacementData

// Per-image crop focus (object-position) for the square thumbnails.
const photoFocus: Record<string, string> = {
  '/datathon_img.png': '80% 50%',
}

const BACKGROUND = '#E1E7EB'

const sortedUpdates = [...updates].sort((a, b) => b.date.localeCompare(a.date))

function UpdateEntry({ update, placement }: { update: Update; placement: Placement }) {
  const photo = update.thumbnail ? (
    <Image
      src={update.thumbnail}
      alt=""
      fill
      sizes="(min-width: 1024px) 164px, 150px"
      loading="lazy"
      style={photoFocus[update.thumbnail ?? ''] ? { objectPosition: photoFocus[update.thumbnail ?? ''] } : undefined}
      className={update.thumbnailContain ? 'object-contain' : 'object-cover'}
    />
  ) : null

  return (
    <li className="timeline-entry group">
      <div className="entry-copy">
        <div className="entry-detail">
          <span aria-hidden="true" className="entry-bullet">•</span>
          <h3 className="entry-title">{update.title}</h3>
          <p className="entry-description">
            {typeof update.content === 'string'
              ? update.content
              : update.content.map((part, i) => typeof part === 'string'
                ? <React.Fragment key={i}>{part}</React.Fragment>
                : <a key={i} href={part.href} target="_blank" rel="noopener noreferrer" className="inline-link">{part.text}</a>)}
          </p>
        </div>
      </div>
      {photo && (
        <figure
          className={`entry-photo${update.thumbnailContain ? ' entry-diagram' : ''}`}
          style={{ '--photo-offset': `${placement.offset}px`, '--photo-y': `${placement.y}px`, '--photo-scale': placement.scale ?? 1 } as CSSProperties}
        >
          <div className="relative h-full w-full overflow-hidden bg-gray-50">{photo}</div>
        </figure>
      )}
    </li>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>carlos</title>
        <meta name="description" content="carlosinator" />
      </Head>
      <div className="min-h-screen" style={{ '--site-background': BACKGROUND, backgroundColor: BACKGROUND } as CSSProperties}>
        <div className="site-frame mx-auto px-8 py-12 sm:px-10 lg:py-24">
          <header className="intro-copy mb-24 lg:mb-28">
            <h1 className="mb-4 text-[22px]">Hello,</h1>
            <p className="mb-6 text-[15px] leading-relaxed text-gray-700">
              I am Carlos. I think a lot about building AI models for <em>curing all disease</em><sup className="text-[9px]">TM</sup> and where I can
              find more Athletic non-alcoholic beer. I live in San Francisco and work as a researcher at{' '}
              <a href="https://www.chaidiscovery.com" target="_blank" rel="noopener noreferrer" className="inline-link">Chai Discovery</a>.
              {' '}Do reach out, even if it&apos;s just to chat about{' '}
              <a href="https://qntm.org/mmacevedo" target="_blank" rel="noopener noreferrer" className="inline-link">strange articles online</a>.
            </p>
            <nav aria-label="Find me elsewhere" className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-gray-700 hover:text-black">
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="narrow-note text-gray-700">
            {/* textLength squeezes/stretches the glyphs so the line always spans the page width. */}
            <svg viewBox="0 0 1000 112" role="img" aria-label="This screen is too narrow to fit the whole page :/" className="block w-full">
              <text x="0" y="102" fontSize="136" fontWeight="700" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="currentColor">
                THIS SCREEN IS TOO NARROW TO FIT THE WHOLE PAGE :/
              </text>
            </svg>
          </div>

          <main aria-label="Updates" className="updates-list list-bullets">
            <h2 className="sr-only">Updates</h2>
            <ul>
              {sortedUpdates.map((update) => (
                <UpdateEntry key={`${update.date}-${update.title}`} update={update} placement={photoPlacements[update.thumbnail ?? ''] ?? { offset: 0, y: 0 }} />
              ))}
            </ul>
            <footer className="intro-copy mt-24 border-t border-gray-200 pt-8 text-xs text-gray-400">
              © {new Date().getFullYear()} Carlos Vonessen
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}
