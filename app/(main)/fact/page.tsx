import { notFound } from 'next/navigation';
import React from 'react'

const getFact = async () => {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", { next: { revalidate: 10 } });
    if (!response.ok) {
        notFound();
    }

    const data = await response.json();
    if (!data) {
        notFound();
    }

    return data;
}

export async function generateMetadata() {

    const data = await getFact();

    return {
        title: data.text,
        description: `The permalink of this fact is ${data.permalink}`,
        authors: [
            {
                name: "Shubham",
                url: "https://shubham.com"
            },
            {
                name: "Useless Joke",
                url: "https://useless-joke.com"
            }
        ],
        metadataBase: new URL("https://shubham.com")
    }

}

async function page() {
    const data = await getFact();

    return (
        <div className="mx-auto w-full max-w-2xl px-6 py-20">

            <h1 className="text-sm font-medium text-white/50">Did you know?</h1>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <p className="text-xl font-medium leading-relaxed text-white">
                    {data.text}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/40">
                    <span>new fact every 10s</span>
                    <a href={data.permalink} target="_blank" rel="noreferrer" className="hover:text-white">
                        source ↗
                    </a>
                </div>
            </div>

        </div>
    )
}

export default page
