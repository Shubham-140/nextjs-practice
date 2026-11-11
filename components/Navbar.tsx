import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 bg-black px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                <Link href="/" className="text-2xl font-bold tracking-tight text-white">
                    Shubham<span className="text-white/40">.</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="text-sm text-white transition hover:text-white/50">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm text-white/50 transition hover:text-white">
                        About
                    </Link>
                    <Link href="/services" className="text-sm text-white/50 transition hover:text-white">
                        Services
                    </Link>
                    <Link href="/contact" className="text-sm text-white/50 transition hover:text-white">
                        Contact
                    </Link>
                </div>

                <Link
                    href="/login"
                    className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/80"
                >
                    Get Started <span className="ml-1">↗</span>
                </Link>

            </div>
        </nav>
    )
}
