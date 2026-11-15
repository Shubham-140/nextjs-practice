import Link from "next/link";

const pages = [
  { href: "/about", title: "About", note: "static metadata" },
  { href: "/fact", title: "Random fact", note: "generateMetadata + revalidate" },
  { href: "/joke", title: "Jokes", note: "server actions, revalidateTag" },
  { href: "/server", title: "Users (server)", note: "fetched on the server" },
  { href: "/client", title: "Users (client)", note: "same thing but with useEffect" },
  { href: "/country/india", title: "Country", note: "route handler, try other countries" },
  { href: "/image/mountain", title: "Image", note: "next/image, change the keyword" },
  { href: "/login", title: "Login", note: "just the ui for now" },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">

      <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/50">
        practice project
      </span>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-white">
        Learning Next.js
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-white/50">
        Stuff I&apos;m trying out while learning Next. Some pages use free APIs so they
        might break once in a while, just refresh.
      </p>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            <p className="text-sm font-medium text-white">{page.title}</p>
            <p className="mt-1 text-xs text-white/40">{page.note}</p>
          </Link>
        ))}
      </div>

    </div>
  );
}
