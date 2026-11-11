"use server"
import { revalidateTag } from "next/cache"

type Joke = {
    category: string,
    id: number,
    setup: string,
    delivery: string
}

export async function revalidateJoke() {
    revalidateTag("joke", { expire: 0 });
}

export async function fetchJoke() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any", { next: { revalidate: 60, tags: ["joke"] } });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const joke: Joke = await response.json();
        if (!joke) {
            throw new Error("Something went wrong");
        }

        return joke;
    } catch (error) {
        console.log("Something went wrong");
        throw error;
    }
}