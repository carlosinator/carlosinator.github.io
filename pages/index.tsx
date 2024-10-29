import Image from 'next/image'
import { useState, useEffect } from 'react'
import { updates, categoryColors } from '../data/updates'
import { ExternalLink } from 'lucide-react'
import Head from 'next/head'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowPopup(false);
    };

    if (showPopup) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showPopup]);

  return (
    <>
      <Head>
        <title>carlos vonessen</title>
        <meta name="description" content="carlosinator" />
      </Head>
    <div className="min-h-screen flex justify-center">
      <main className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col md:flex-row">
        {/* Profile Section */}
        <aside className="md:w-72 lg:w-80 shrink-0 py-8 md:py-16 lg:py-24 md:sticky md:top-0 md:h-screen">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 md:w-60 md:h-60">
              <Image
                src="/profile.jpg"
                alt="Carlos"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            <h1 className="mt-4 text-2xl font-light tracking-wide">Carlos</h1>
            <div className="font-mono text-sm opacity-70 mb-4">Statistics & ML</div>

            {/* Bio Section */}
            <p className="text-sm text-gray-600 mb-8 max-w-[280px]">
                Finishing my masters in computer science at ETH Zürich and currently working on my thesis at the University of Cambridge.
                Checkout some of my work on <a href="https://github.com/carlosinator" target="_blank" rel="noopener noreferrer">Github</a>.
                You can also find a more formal introduction on <a href="https://www.linkedin.com/in/carlos-vonessen-8265571bb/" target="_blank" rel="noopener noreferrer">Linkedin</a>.
            </p>

              {/* Social Links Row */}
              <div className="flex gap-2 w-full max-w-[280px] justify-center">
              {[
                  { name: 'GitHub', href: 'https://github.com/carlosinator', active: true, isExternal: true },
                  { name: 'Scholar', href: 'https://scholar.google.com/citations?user=5lyYqIsAAAAJ&hl=en', active: true, isExternal: true },
                  { name: 'X', href: 'https://x.com/carlos_vonessen', active: true, isExternal: true }
              ].map(link => (
                <div key={link.name} className="relative flex-1">
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="px-3 py-2 rounded-xl text-center transition-all text-sm w-full block
                      bg-white text-black font-medium border-[1.5px] border-black
                      hover:bg-black/5 hover:text-black"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* News Feed Section Updates */}
        <section className="flex-grow max-w-2xl py-8 md:py-16 lg:py-24 md:pl-16 lg:pl-24">
          <h2 className="text-2xl font-bold mb-12">All Things</h2>

          <div className="space-y-12">
            {updates.map((update) => (
              <article
                key={update.date}
                className={`relative ${update.link ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                onClick={() => update.link && window.open(update.link, '_blank')}
              >
                <div className="flex items-center gap-3 mb-2">
                  <time className="font-mono text-xs opacity-70">
                    {update.date}
                  </time>
                  <span className={`text-xs font-['Courier'] uppercase tracking-wider ${categoryColors[update.category]} opacity-80`}>
                    {update.category}
                  </span>
                </div>
                <h3 className="text-lg font-light mb-2 flex items-center gap-2">
                  {update.title}
                  {update.link && (
                    <ExternalLink className="w-3.5 h-3.5 text-gray-900" />
                  )}
                </h3>
                <p className="text-sm opacity-80 font-light">
                  {update.content}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
    </>
  )
}
