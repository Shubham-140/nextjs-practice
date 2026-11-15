"use client"
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react'

type User = {
    id: number,
    name: string
}

function page() {
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const controllerRef = useRef<AbortController | null>(null);

    const fetchUsers = useCallback(async () => {
        if (controllerRef.current) {
            controllerRef.current.abort();
        }
        setLoading(true);
        const controller = new AbortController();
        controllerRef.current = controller;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_JSONPLACEHOLDER_API_CLIENT}`, { signal: controller.signal });
            if (!response.ok) {
                router.push("/404");
                return;
            }

            const fetchedUsers: User[] = await response.json();
            if (fetchedUsers.length === 0) {
                router.push("/404");
                return;
            }

            setUsers(fetchedUsers);
        }
        catch (error: unknown) {
            if (error instanceof Error && error.name === "AbortError") {
                console.log("Ongoing flight request is stopped");
            }
            else {
                console.log(error);
            }
        }
        finally {
            if (controller === controllerRef.current) {
                setLoading(false);
                controllerRef.current = null;
            }
        }
    }, [router])

    useEffect(() => {
        fetchUsers();

        return () => {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
        }
    }, [fetchUsers])

    return (
        <div className="mx-auto w-full max-w-xl px-6 py-16">

            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-white">Users</h1>
                    <p className="mt-2 text-sm text-white/40">fetched on the client this time</p>
                </div>
                <button
                    className="cursor-pointer rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/85 disabled:cursor-wait disabled:opacity-50"
                    onClick={fetchUsers}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Fetch again"}
                </button>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-white/10 text-xs text-white/40">
                            <th className="px-5 py-3 font-normal">#</th>
                            <th className="px-5 py-3 font-normal">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr key={user.id} className="border-b border-white/5 last:border-0">
                                    <td className="px-5 py-3 text-white/30">{user.id}</td>
                                    <td className="px-5 py-3 text-white/80">{user.name}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default page
