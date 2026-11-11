import React from 'react'
import { revalidateJoke } from './server';

type Joke = {
    category: string,
    id: number,
    setup: string,
    delivery: string
}

async function page() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any", { next: { revalidate: 60, tags: ["joke"] } });
    if (!response.ok) {
        console.log("Something went wrong");
        return;
    }

    const joke: Joke = await response.json();
    if (!joke) {
        console.log("Something went wrong");
        return;
    }

    return (
        <div>
            <p>Category:{joke.category}</p>
            <p>Setup:{joke.setup}</p>
            <p>Delivery:{joke.delivery}</p>

            <form action={revalidateJoke}>
                <button>
                    Re-fetch
                </button>
            </form>
        </div>
    )
}

export default page
