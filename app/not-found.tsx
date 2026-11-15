import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-6">
            <div className="flex flex-col items-center text-center">

                <h1 className="text-8xl font-bold tracking-tight text-white">
                    404
                </h1>

                <h2 className="mt-4 text-lg font-medium text-white">
                    Nothing here
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                    Sorry, the page you're looking for doesn't exist
                    or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 rounded-lg border border-white/20 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-black"
                >
                    go back home
                </Link>

            </div>
        </div>
    )
}
