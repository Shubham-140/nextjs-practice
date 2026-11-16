"use client"
import "./globals.css";

export default function GlobalError({ error, retry }: { error: unknown, retry: () => void }) {
    const digest = error instanceof Error && "digest" in error ? String(error.digest) : null;

    return (
        <html lang="en">
            <body className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
                <title>Something went wrong</title>
                <div className="flex flex-col items-center text-center">

                    <h1 className="text-2xl font-semibold tracking-tight">Something went wrong</h1>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                        The app couldn&apos;t load. Try again in a moment.
                    </p>

                    <button
                        onClick={() => retry()}
                        className="mt-8 cursor-pointer rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/85"
                    >
                        Try again
                    </button>

                    {digest && <p className="mt-6 text-xs text-white/30">error id: {digest}</p>}

                </div>
            </body>
        </html>
    )
}
