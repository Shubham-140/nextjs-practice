# nextjs-practice

Just a practice repo I use to revise Next.js (App Router). Every page tries out one thing, so it's more of a playground than an actual app. Some pages use free public APIs, so they might break once in a while.

Built with Next.js 16, React 19, TypeScript and Tailwind CSS.

## What's in here

| Route | What it covers |
| --- | --- |
| `/` | home page, links to everything |
| `/about` | static metadata |
| `/fact` | `generateMetadata`, time based revalidation |
| `/joke` | server actions, `revalidateTag`, `server-only`, streaming with Suspense |
| `/server` | fetching on the server, streaming with Suspense |
| `/client` | same data but fetched on the client with `useEffect` and `AbortController` |
| `/country/[val]` | route handler (`/api/countries`) + dynamic route, e.g. `/country/india` |
| `/image/[keyword]` | `next/image` with remote images, `generateStaticParams` |
| `/login` | just the UI for now, lives in a separate `(auth)` route group |

Other stuff used across the app:

- route groups for main and auth pages with their own layouts
- `loading.tsx`, `not-found.tsx`, `error.tsx` and `global-error.tsx`
- Google fonts with `next/font`
- active link highlighting in the navbar with `usePathname`
- a global toast using the Context API
- env variables, both server only and `NEXT_PUBLIC_`

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Env variables

Create a `.env` file in the root with these:

```
JSONPLACEHOLDER_API=
NEXT_PUBLIC_JSONPLACEHOLDER_API_CLIENT=
JSONPLACEHOLDER_API_DEL=
COUNTRY_API=
```

The first three are JSONPlaceholder URLs (users list and a posts endpoint), and `COUNTRY_API` is an API key from restcountries. If any of them is missing, the page using it will show which one.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - production build
- `npm run start` - run the production build
- `npm run lint` - run ESLint
