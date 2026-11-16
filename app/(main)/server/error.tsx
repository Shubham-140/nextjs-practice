"use client"
import ErrorView from "@/components/ErrorView";

export default function Error({ error, retry }: { error: unknown, retry: () => void }) {
    return (
        <ErrorView
            error={error}
            retry={retry}
            title="Couldn't load users"
            message="Fetching users on the server failed. Check that JSONPLACEHOLDER_API is set, then try again."
        />
    )
}
