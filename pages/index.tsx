import Image from 'next/image'
import Head from 'next/head'
import { updates } from '../data/updates'
import { ExternalLink } from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>carlos vonessen</title>
        <meta name="description" content="carlosinator" />
      </Head>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--site-background, #F7F8F9)' }}>
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-6 py-12 lg:py-24 gap-12 lg:gap-24">
          {/* Left Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              {/* Name */}
              <h1 className="text-2xl mb-4">Carlos Vonessen</h1>

              {/* Bio */}
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Hi, I am Carlos. I work on AI research at Chai Discovery, where we build generative models for biology.
                I live in San Francisco.
              </p>

              {/* Links */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://x.com/carlos_vonessen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  x
                </a>
                <a
                  href="https://github.com/carlosinator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  github
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-vonessen-8265571bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  linkedin
                </a>
                <a
                  href="https://www.admonymous.co/carlosinator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  feedback
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-2xl">
            <div>
              {updates.map((update) => (
                <article key={update.date} className="group py-8 first:pt-0">
                  {/* Title and Date on same line */}
                  <h2 className="text-xl font-semibold mb-4 leading-relaxed">
                    {update.link ? (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-gray-600"
                      >
                        {update.title}
                      </a>
                    ) : (
                      update.title
                    )}
                    <span className="text-gray-400 ml-3 font-normal">
                      ({update.date})
                    </span>
                  </h2>

                  {/* Content with optional floating image */}
                  <div>
                    {update.thumbnail && (
                      <div
                        className={`float-left mr-6 mb-3 w-48 h-28 rounded border border-gray-200 overflow-hidden bg-gray-50 ${update.link ? 'cursor-pointer hover:border-gray-300' : ''}`}
                        onClick={() => update.link && window.open(update.link, '_blank')}
                      >
                        <Image
                          src={update.thumbnail}
                          alt=""
                          width={300}
                          height={187}
                          loading="lazy"
                          className={`w-full h-full ${update.thumbnailContain ? 'object-contain' : 'object-cover'} ${update.link ? 'group-hover:opacity-90' : ''}`}
                        />
                      </div>
                    )}
                    <p className="text-base text-gray-700 leading-relaxed">
                      {Array.isArray(update.content)
                        ? update.content.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)
                        : update.content}
                    </p>
                    {update.link && (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-gray-600 hover:text-black"
                      >
                        link
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <div className="clear-both"></div>
                  </div>
                </article>
              ))}
            </div>

            {/* Footer */}
            <footer className="text-xs text-gray-400 mt-24 pt-8 border-t border-gray-200">
              © {new Date().getFullYear()} Carlos Vonessen
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}
