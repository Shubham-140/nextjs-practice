"use client"
import Link from "next/link";
import { useEffect } from "react";

type Props = {
    error: unknown,
    retry: () => void,
    title?: string,
    message?: string
}

export default function ErrorView({
    error,
    retry,
    title = "Something went wrong",
    message = "This page ran into a problem. Try again, or go back home."
}: Props) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    const digest = error instanceof Error && "digest" in error ? String(error.digest) : null;
    const details = process.env.NODE_ENV === "development" && error instanceof Error ? error.message : null;

    return (
        <div className="mx-auto flex w-full max-w-md flex-col items-center px-6 py-24 text-center">

            <span className="rounded-full border border-red-400/20 bg-red-400/5 px-3 py-1 text-xs text-red-300/90">
                error
            </span>

            <h1 className="mt-5 text-2xl font-semibold tracking-tight text-white">{title}</h1>
            <p className="mt-3 text-sm leading-6 text-white/50">{message}</p>

            {details && (
                <pre className="mt-6 w-full overflow-auto rounded-lg border border-white/10 bg-white/[0.03] p-3 text-left text-xs text-white/60">
                    {details}
                </pre>
            )}

            <div className="mt-8 flex gap-3">
                <button
                    onClick={() => retry()}
                    className="cursor-pointer rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="rounded-lg border border-white/20 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-black"
                >
                    Go home
                </Link>
            </div>

            {digest && <p className="mt-6 text-xs text-white/30">error id: {digest}</p>}

        </div>
    )
}
