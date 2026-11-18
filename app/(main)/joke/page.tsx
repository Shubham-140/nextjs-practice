import React from 'react'
import { fetchJoke } from './actions';
import JokeButton from './JokeButton';
import { deletePost } from './server';

async function page() {

    const joke = await fetchJoke();
    const deletedPost = await deletePost({ // for testing server-only.
        title: "Greetings",
        body: "Hi! My name is Shubham Singh.",
        userId: 6
    })

    return (
        <div className="mx-auto w-full max-w-lg px-6 py-16">

            <h1 className="text-3xl font-semibold tracking-tight text-white">Joke</h1>
            <p className="mt-2 text-sm text-white/40">cached for a minute, or hit the button</p>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/60">
                    {joke.category || "N/A"}
                </span>
                <p className="mt-5 text-lg leading-relaxed text-white">
                    {joke.setup || "N/A"}
                </p>
                <p className="mt-3 text-sm text-white/50">
                    {joke.delivery || "N/A"}
                </p>
            </div>

            <JokeButton />

            <div className="mt-12 rounded-lg border border-dashed border-white/15 p-4 text-xs">
                <p className="mb-2 text-white/40">test post response</p>
                <p className="text-white/80">{deletedPost.title}</p>
                <p className="mt-1 text-white/50">{deletedPost.body}</p>
            </div>

        </div>
    )
}

export default page
