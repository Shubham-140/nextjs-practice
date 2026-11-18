"use client"

import { useToast } from "@/components/ToastProvider";
import { revalidateJoke } from "./actions";

export default function JokeButton() {
    const { showToast } = useToast();

    const getNewJoke = async () => {
        await revalidateJoke();
        showToast({ heading: "New joke loaded", message: "Fetched a fresh one from the joke API." });
    }

    return (
        <form action={getNewJoke} className="mt-4">
            <button className="w-full cursor-pointer rounded-lg bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/85">
                Another one
            </button>
        </form>
    )
}
