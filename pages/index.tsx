import Image from 'next/image'
import Head from 'next/head'
import { updates, type Update } from '../data/updates'
import React, { useEffect, useState, type CSSProperties } from 'react'

const links = [
  { label: 'x', href: 'https://x.com/carlos_vonessen' },
  { label: 'github', href: 'https://github.com/carlosinator' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/carlos-vonessen-8265571bb/' },
  { label: 'feedback', href: 'https://www.admonymous.co/carlosinator' },
]

const photoPlacements: Record<string, { offset: number; y: number; scale?: number }> = {
  '/boba_img.jpg': { offset: 40, y: 0 },
  '/ligo_img.png': { offset: 136, y: 10 },
  '/pink-animation-3-transparent.webp': { offset: 0, y: 10 },
  '/unconference_img.png': { offset: 144, y: -4 },
  '/hsg_2d.png': { offset: 36, y: 6 },
  '/datathon_img.png': { offset: 120, y: 8, scale: 0.92 },
  '/pixel_life_img.png': { offset: 56, y: 2 },
}

// Per-image crop focus (object-position) for the square thumbnails.
const photoFocus: Record<string, string> = {
  '/datathon_img.png': '80% 50%',
}

const backgrounds = [
  { name: 'Cooler · original', color: '#E1E7EB' },
  { name: 'Cooler · lighter', color: '#E5EBEF' },
  { name: 'Cooler · deeper', color: '#DCE3E8' },
  { name: 'Cooler · bluer', color: '#DEE6EC' },
  { name: 'Deeper · original', color: '#DFE2E4' },
  { name: 'Deeper · lighter', color: '#E3E6E8' },
  { name: 'Deeper · darker', color: '#DADDE0' },
  { name: 'Deeper · cooler', color: '#DCE1E5' },
  { name: 'Smoke · original', color: '#D9DDE0' },
  { name: 'Smoke · lighter', color: '#DDE1E4' },
  { name: 'Smoke · darker', color: '#D3D8DC' },
  { name: 'Smoke · blue tint', color: '#D5DDE3' },
]

const listStyles = [
  { id: 'bullets', name: 'Bullets' },
  { id: 'dates', name: 'Date column' },
  { id: 'years', name: 'By year' },
] as const
type ListStyle = typeof listStyles[number]['id']
const sortedUpdates = [...updates].sort((a, b) => b.date.localeCompare(a.date))
const years = Array.from(new Set(sortedUpdates.map((update) => update.date.slice(0, 4))))
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function UpdateEntry({ update, index, listStyle }: { update: Update; index: number; listStyle: ListStyle }) {
  const placement = photoPlacements[update.thumbnail ?? ''] ?? { offset: 0, y: 0 }
  const month = months[Number(update.date.slice(5, 7)) - 1]
  const Heading = listStyle === 'years' ? 'h4' : 'h3'
  const photo = update.thumbnail ? (
    <Image
      src={update.thumbnail}
      alt=""
      fill
      sizes="(min-width: 1024px) 164px, 150px"
      loading="lazy"
      style={photoFocus[update.thumbnail ?? ''] ? { objectPosition: photoFocus[update.thumbnail ?? ''] } : undefined}
      className={`${update.thumbnailContain ? 'object-contain' : 'object-cover'} transition-opacity group-hover:opacity-95`}
    />
  ) : null

  return (
    <li className="timeline-entry group">
      <div className="entry-copy">
        <time className="entry-date" dateTime={update.date} title={update.date}>
          {month}{listStyle !== 'years' && ` ${update.date.slice(0, 4)}`}
        </time>
        <div className="entry-detail">
          <span aria-hidden="true" className="entry-bullet">•</span>
          <Heading className="entry-title">
            {update.link ? (
              <a href={update.link} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                {update.title}
              </a>
            ) : update.title}
          </Heading>
          <p className="entry-description">
            {Array.isArray(update.content)
              ? update.content.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)
              : update.content}
          </p>
        </div>
      </div>
      {photo && (
        <figure className={`entry-photo${update.thumbnailContain ? ' entry-diagram' : ''}`} style={{ '--photo-offset': `${placement.offset}px`, '--photo-y': `${placement.y}px`, '--photo-scale': placement.scale ?? 1 } as CSSProperties}>
          {update.link ? (
            <a href={update.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${update.title}`} className="relative block h-full w-full overflow-hidden bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              {photo}
            </a>
          ) : <div className="relative h-full w-full overflow-hidden bg-gray-50">{photo}</div>}
        </figure>
      )}
    </li>
  )
}

export default function Home() {
  const [background, setBackground] = useState('#E1E7EB')
  const [listStyle, setListStyle] = useState<ListStyle>('bullets')

  // Paint the page root too, so overscroll/rubber-banding matches the chosen background.
  useEffect(() => {
    document.documentElement.style.backgroundColor = background
    document.body.style.backgroundColor = background
  }, [background])

  return (
    <>
      <Head>
        <title>carlos vonessen</title>
        <meta name="description" content="carlosinator" />
      </Head>
      <div className="min-h-screen" style={{ '--site-background': background, backgroundColor: background } as CSSProperties}>
        <div className="site-frame mx-auto px-8 py-12 sm:px-10 lg:py-24">
          <header className="intro-copy mb-24 lg:mb-28">
            <h1 className="mb-4 text-[22px]">About</h1>
            <p className="mb-6 text-[13px] leading-relaxed text-gray-700">
              Hi, I am Carlos. I work on AI research at Chai Discovery, where we build generative models for biology.
              I live in San Francisco.
            </p>
            <nav aria-label="Find me elsewhere" className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-gray-700 hover:text-black">
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <main aria-label="Updates" className={`updates-list list-${listStyle}`}>
            <h2 className="sr-only">Updates</h2>
            {listStyle === 'years' ? years.map((year) => (
              <section key={year} aria-labelledby={`year-${year}`} className="year-group">
                <h3 id={`year-${year}`} className="year-heading">{year}</h3>
                <ul>
                  {sortedUpdates.filter((update) => update.date.startsWith(year)).map((update) => (
                    <UpdateEntry key={`${update.date}-${update.title}`} update={update} index={sortedUpdates.indexOf(update)} listStyle={listStyle} />
                  ))}
                </ul>
              </section>
            )) : (
              <ul>
                {sortedUpdates.map((update, index) => (
                  <UpdateEntry key={`${update.date}-${update.title}`} update={update} index={index} listStyle={listStyle} />
                ))}
              </ul>
            )}
            <footer className="intro-copy mt-24 border-t border-gray-200 pt-8 text-xs text-gray-400">
              © {new Date().getFullYear()} Carlos Vonessen
            </footer>
          </main>

          {process.env.NODE_ENV === 'development' && (
            <aside aria-label="Layout preview" className="fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)] rounded-lg border border-gray-200 bg-white p-3 text-xs text-gray-600 shadow-sm">
              <div role="group" aria-label="List layout" className="mb-3 flex gap-1">
                {listStyles.map((style) => (
                  <button key={style.id} type="button" aria-pressed={listStyle === style.id} onClick={() => setListStyle(style.id)} className={`rounded px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${listStyle === style.id ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>
                    {style.name}
                  </button>
                ))}
              </div>
              <label className="flex items-center justify-between gap-3">
                Background
                <select aria-label="Preview background" value={background} onChange={(event) => setBackground(event.target.value)} className="rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-900">
                  {backgrounds.map((paper) => <option key={paper.name} value={paper.color}>{paper.name}</option>)}
                </select>
              </label>
            </aside>
          )}
        </div>
      </div>
    </>
  )
}
