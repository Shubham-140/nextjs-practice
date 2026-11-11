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

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='flex flex-col gap-6'>
            <div>
                {
                    users.map((user) => {
                        return <div key={user.id}>
                            <p>{user.name}</p>
                        </div>
                    })
                }
            </div>

            <button className='self-start p-3 border-1 bg-blue-200 rounded-md text-black cursor-pointer' onClick={fetchUsers}>Fetch Again</button>
        </div>
    )
}

export default page
