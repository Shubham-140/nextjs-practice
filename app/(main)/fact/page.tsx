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
        <div>
            {data.text}
        </div>
    )
}

export default page
