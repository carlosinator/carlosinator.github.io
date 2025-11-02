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
      <div className="min-h-screen bg-[#fafafa] px-6 sm:px-8 md:px-12 flex justify-center">
        <div className="w-full max-w-3xl pt-32 space-y-16">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row md:items-start gap-8 bg-white border border-gray-200 rounded-xl shadow-md p-8">
            {/* Text + Title */}
            <div className="flex-1">
              <h1 className="text-3xl font-light mb-4 text-center md:text-left">Carlos Vonessen</h1>
              <p className="text-base text-gray-700 mb-4 md:mb-6 text-center md:text-left">
                Hi, I am Carlos. I am wrapping up my masters in CS at ETH Zurich and working on generative models in biology.
                Currently based in Zurich but moving to San Francisco in the new year!
              </p>

              {/* Contacts (text links) */}
              <div className="flex justify-center md:justify-start gap-6 mt-6 text-gray-700">
                {[
                  { text: 'github', href: 'https://github.com/carlosinator' },
                  { text: 'x', href: 'https://x.com/carlos_vonessen' },
                  { text: 'linkedin', href: 'https://www.linkedin.com/in/carlos-vonessen-8265571bb/' },

                ].map(({ text, href }) => (
                  <a
                    key={text}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium text-black lowercase hover:text-gray-700"
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>

            {/* Headshot */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-32 h-32 md:w-48 md:h-48">
                <Image
                  src="/profile.jpg"
                  alt="Carlos"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </section>

          {/* News Section */}
          <section className="pb-24 max-w-2xl mx-auto">
            {/* <h2 className="text-2xl font-bold mb-12 text-center md:text-left">All Things</h2> */}

            <div className="space-y-12">
              {updates.map((update) => (
                <article
                  key={update.date}
                  className={`relative flex flex-col md:flex-row gap-4 items-start ${update.link ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                  onClick={() => update.link && window.open(update.link, '_blank')}
                >
                  {/* Thumbnail (optional) */}
                  {update.thumbnail && (
                    <div className="w-full aspect-[16/10] md:w-28 md:h-20 md:aspect-auto md:w-32 md:h-24 flex-none rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                      {typeof update.thumbnail === 'string' && update.thumbnail !== 'placeholder' && (
                        <Image
                          src={update.thumbnail}
                          alt="thumbnail"
                          fill={false}
                          width={512}
                          height={320}
                          className={`${update.thumbnailContain ? 'object-contain' : 'object-cover'} w-full h-full rounded-md`}
                        />
                      )}
                    </div>
                  )}

                  {/* Textual content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <time className="font-mono text-xs opacity-70">
                        {update.date}
                      </time>
                      <span
                        className={`text-xs font-['Courier'] uppercase tracking-wider px-2 py-0.5 rounded-md ${update.category === 'paper'
                          ? 'bg-red-100 text-red-700'
                          : update.category === 'post'
                            ? 'bg-emerald-100 text-emerald-700'
                            : update.category === 'project'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-sky-100 text-sky-700'
                          }`}
                      >
                        {update.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-light mb-1">
                      {update.title}
                      {update.link && (
                        <a
                          href={update.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline align-baseline ml-2"
                        >
                          <ExternalLink className="inline w-4 h-4 text-gray-900 align-baseline" style={{ verticalAlign: '-0.125em' }} />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm opacity-80 font-light">
                      {Array.isArray(update.content)
                        ? update.content.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)
                        : update.content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 pb-12 pt-4 border-t border-gray-200">
            © {new Date().getFullYear()} Carlos Vonessen
          </footer>
        </div>
      </div>
    </>
  )
}
