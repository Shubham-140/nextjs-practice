import React from 'react'
import { fetchJoke, revalidateJoke } from './actions';
import { deletePost } from './server';

async function page() {

    const joke = await fetchJoke();
    const deletedPost = await deletePost({ // for testing server-only.
        title: "Greetings",
        body: "Hi! My name is Shubham Singh.",
        userId: 6
    })

    return (
        <div>
            <div>
                <p>Category:{joke.category || "N/A"}</p>
                <p>Setup:{joke.setup || "N/A"}</p>
                <p>Delivery:{joke.delivery || "N/A"}</p>
            </div>

            <form action={revalidateJoke}>
                <button>
                    Re-fetch
                </button>
            </form>

            <div>
                <p>{deletedPost.title}</p>
                <p>{deletedPost.body}</p>
            </div>
        </div>
    )
}

export default page
