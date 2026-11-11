import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-6">
            <div className="flex flex-col items-center text-center">

                <h1 className="text-8xl font-bold tracking-tighter text-white sm:text-9xl">
                    404
                </h1>

                <div className="my-6 h-px w-16 bg-white/30" />

                <h2 className="text-xl font-medium text-white">
                    Page not found
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                    Sorry, the page you're looking for doesn't exist
                    or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                    <span>←</span>
                    Back to home
                </Link>

                <span className="mt-12 text-[10px] uppercase tracking-[0.3em] text-white/20">
                    Error 404 · Not Found
                </span>

            </div>
        </div>
    )
}
