"use client"
import ErrorView from "@/components/ErrorView";

export default function Error({ error, retry }: { error: unknown, retry: () => void }) {
    return (
        <ErrorView
            error={error}
            retry={retry}
            title="Couldn't load a joke"
            message="The joke API or the test post request failed. It's usually temporary, so try again."
        />
    )
}
