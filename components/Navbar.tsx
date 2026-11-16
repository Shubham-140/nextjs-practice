import Link from "next/link";
import { Suspense } from "react";
import NavLinks, { NavLinksList } from "./NavLinks";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 bg-black px-6 py-3">
            <div className="mx-auto flex max-w-4xl items-center justify-between">

                <Link href="/" className="text-lg font-bold text-white">
                    Shubham<span className="text-white/40">.dev</span>
                </Link>

                {/* usePathname needs Suspense with cacheComponents on dynamic routes */}
                <Suspense fallback={<NavLinksList pathname={null} />}>
                    <NavLinks />
                </Suspense>

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
