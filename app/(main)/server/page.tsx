import { notFound } from 'next/navigation';

type User = {
    name: string,
    id: number
}

async function page() {
    const response = await fetch(`${process.env.JSONPLACEHOLDER_API}`);
    if (!response.ok) {
        notFound();
    }

    const users: User[] = await response.json();
    if (users.length === 0) {
        notFound();
    }

    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                })
            }
        </div>
    )
}

export default page
