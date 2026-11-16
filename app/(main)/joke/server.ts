import "server-only";

type Data = {
    title: string,
    body: string,
    userId: number
}

export async function deletePost(data: Data) {
    const url = process.env.JSONPLACEHOLDER_API_DEL;
    if (!url) {
        throw new Error("Missing environment variable: JSONPLACEHOLDER_API_DEL");
    }

    try {
        const response = await fetch(url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )

        if (!response.ok) {
            throw new Error("Failed to create a post");
        }

        console.log("Post has been created successfully");
        return response.json();
    } catch (error) {
        console.log("Something went wrong");
        throw error;
    }
}