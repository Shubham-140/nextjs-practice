
export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-6">
            <div className="flex flex-col items-center text-center">

                <div className="mb-8 h-10 w-10 animate-spin rounded-full border-[3px] border-white/10 border-t-white" />

                <h1 className="text-xl font-medium tracking-tight text-white">
                    Just a moment
                </h1>

                <p className="mt-2 text-sm text-white/40">
                    Preparing everything for you...
                </p>

            </div>
        </div>
    )
}
