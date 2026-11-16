import { notFound } from 'next/navigation';

type User = {
    name: string,
    id: number
}

async function page() {
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
        <div className="mx-auto w-full max-w-xl px-6 py-16">

            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-white">Users</h1>
                    <p className="mt-2 text-sm text-white/40">fetched on the server</p>
                </div>
                <span className="text-xs text-white/40">{users.length} total</span>
            </div>

            <ul className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.03]">
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

        </div>
    )
}

export default page
