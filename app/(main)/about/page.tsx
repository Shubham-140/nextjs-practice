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

function page() {
    return (
        <div>
            Hi! This is About page
        </div>
    )
}

export default page
