import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About Page",
    description: "This is the description for about page",
    keywords: ["next.js", "next.js practice", "practice"],
    authors: [{
        name: "Shubham Singh",
        url: "https://shubham.com"
    }],
    openGraph: {
        title: "About Page",
        description: "This is about page",
        url: "/about",
        siteName: "Next.js Practice",
        type: "website",
        images: [
            {
                url: "/opengraph-image.png",
                alt: "About Next.js Practice Page",
                width: 1200,
                height: 600
            }
        ]
    },
    twitter: {
        title: "About Page",
        description: "This is About Page",
        images: ["/opengraph-image.png"],
        card: "summary_large_image"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true
        }
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
    },
    metadataBase: new URL("https://shubham.com")
}

const topics = [
    "Route groups",
    "Server components",
    "Client components",
    "Route handlers",
    "Server actions",
    "Caching",
    "Metadata",
    "next/image",
    "next/font",
]

function page() {
    return (
        <div className="mx-auto w-full max-w-2xl px-6 py-16">

            <h1 className="text-3xl font-semibold tracking-tight text-white">
                About
            </h1>

            <p className="mt-5 text-sm leading-7 text-white/60">
                Hi, I&apos;m Shubham. This is my practice project for Next.js, I keep adding
                pages here whenever I learn something new. Nothing here is meant for
                production, it&apos;s mostly me breaking things and fixing them.
            </p>

            <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h2 className="text-sm font-medium text-white">
                    Things I&apos;ve covered so far
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                    {topics.map((topic) => (
                        <span
                            key={topic}
                            className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-white/60"
                        >
                            {topic}
                        </span>
                    ))}
                </div>
            </div>

            <p className="mt-6 text-xs text-white/30">
                more coming soon (hopefully)
            </p>

        </div>
    )
}

export default page
