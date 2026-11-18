import { Suspense } from 'react';
import { notFound } from 'next/navigation';

type User = {
    name: string,
    id: number
}

async function UsersList() {
    const url = process.env.JSONPLACEHOLDER_API;
    if (!url) {
        throw new Error("Missing environment variable: JSONPLACEHOLDER_API");
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Users request failed (${response.status})`);
    }

    const users: User[] = await response.json();
    if (users.length === 0) {
        notFound();
    }

    return (
        <>
            <p className="mt-8 text-right text-xs text-white/40">{users.length} total</p>

            <ul className="mt-2 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.03]">
                {
                    users.map((user) => {
                        return <li key={user.id} className="flex items-center gap-4 px-5 py-3.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-white/70">
                                {user.name.charAt(0)}
                            </span>
                            <p className="text-sm text-white">{user.name}</p>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

function UsersSkeleton() {
    return (
        <>
            <div className="mt-8 ml-auto h-3 w-12 animate-pulse rounded bg-white/10" />

            <ul className="mt-2 animate-pulse divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.03]">
                {
                    Array.from({ length: 6 }).map((_, index) => {
                        return <li key={index} className="flex items-center gap-4 px-5 py-3.5">
                            <span className="h-8 w-8 rounded-full bg-white/10" />
                            <span className="h-4 w-40 rounded bg-white/10" />
                        </li>
                    })
                }
            </ul>
        </>
    )
}

function page() {
    return (
        <div className="mx-auto w-full max-w-xl px-6 py-16">

            <h1 className="text-3xl font-semibold tracking-tight text-white">Users</h1>
            <p className="mt-2 text-sm text-white/40">fetched on the server, streamed in</p>

            <Suspense fallback={<UsersSkeleton />}>
                <UsersList />
            </Suspense>

        </div>
    )
}

export default page
