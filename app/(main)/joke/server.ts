"server-only"

type Data = {
    title: string,
    body: string,
    userId: number
}

export async function deletePost(data: Data) {
    try {
        const response = await fetch(`${process.env.JSONPLACEHOLDER_API_DEL}`,
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