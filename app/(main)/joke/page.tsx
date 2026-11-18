import { Suspense } from 'react'
import { fetchJoke } from './actions';
import { deletePost } from './server';
import JokeButton from './JokeButton';

async function JokeCard() {
    const joke = await fetchJoke();

    return (
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
    )
}

async function TestPost() {
    const deletedPost = await deletePost({
        title: "Greetings",
        body: "Hi! My name is Shubham Singh.",
        userId: 6
    })

    return (
        <>
            <p className="text-white/80">{deletedPost.title}</p>
            <p className="mt-1 text-white/50">{deletedPost.body}</p>
        </>
    )
}

function JokeSkeleton() {
    return (
        <div className="mt-8 animate-pulse rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="h-5 w-16 rounded-full bg-white/10" />
            <div className="mt-5 h-5 w-full rounded bg-white/10" />
            <div className="mt-2 h-5 w-3/4 rounded bg-white/10" />
            <div className="mt-4 h-4 w-1/2 rounded bg-white/5" />
        </div>
    )
}

function TestPostSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="h-4 w-24 rounded bg-white/10" />
            <div className="mt-2 h-4 w-2/3 rounded bg-white/5" />
        </div>
    )
}

function page() {
    return (
        <div className="mx-auto w-full max-w-lg px-6 py-16">

            <h1 className="text-3xl font-semibold tracking-tight text-white">Joke</h1>
            <p className="mt-2 text-sm text-white/40">cached for a minute, or hit the button</p>

            <Suspense fallback={<JokeSkeleton />}>
                <JokeCard />
            </Suspense>

            <JokeButton />

            <div className="mt-12 rounded-lg border border-dashed border-white/15 p-4 text-xs">
                <p className="mb-2 text-white/40">test post response</p>
                <Suspense fallback={<TestPostSkeleton />}>
                    <TestPost />
                </Suspense>
            </div>

        </div>
    )
}

export default page
