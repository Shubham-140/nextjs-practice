import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 bg-black px-6 py-3">
            <div className="mx-auto flex max-w-4xl items-center justify-between">

                <Link href="/" className="text-lg font-bold text-white">
                    Shubham<span className="text-white/40">.dev</span>
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    <Link href="/" className="text-sm text-white transition hover:text-white/50">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm text-white/50 transition hover:text-white">
                        About
                    </Link>
                    <Link href="/fact" className="text-sm text-white/50 transition hover:text-white">
                        Fact
                    </Link>
                    <Link href="/joke" className="text-sm text-white/50 transition hover:text-white">
                        Jokes
                    </Link>
                </div>

                <Link
                    href="/login"
                    className="rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-white/85"
                >
                    Login
                </Link>

            </div>
        </nav>
    )
}
