import Link from 'next/link'

export default function Custom404() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-mono mb-8">
                404: not a page :/
            </h1>

            <p className="text-lg mb-12 font-mono text-gray-600">
                but here's a <a
                    href="https://www.janestreet.com/puzzles/current-puzzle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono underline underline-offset-4 text-gray-800 
                  hover:text-blue-600 transition-colors"
                >
                    puzzle
                </a>
            </p>


        </main>
    )
} 