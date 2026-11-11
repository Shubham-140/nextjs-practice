"use server"
import { revalidateTag } from "next/cache"

export async function revalidateJoke() {
    revalidateTag("joke", {expire:0});
}