"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/fact", label: "Fact" },
    { href: "/joke", label: "Jokes" },
];

function isActive(pathname: string | null, href: string) {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinksList({ pathname }: { pathname: string | null }) {
    return (
        <div className="hidden items-center gap-6 md:flex">
            {links.map(({ href, label }) => {
                const active = isActive(pathname, href);
                return (
                    <Link
                        key={href}
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={`text-sm transition ${active ? "text-white hover:text-white/50" : "text-white/50 hover:text-white"}`}
                    >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
}

export default function NavLinks() {
    const pathname = usePathname();
    return <NavLinksList pathname={pathname} />;
}
