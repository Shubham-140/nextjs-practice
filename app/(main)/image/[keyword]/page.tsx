import { Suspense } from 'react';
import ImageComponent from '../ImageComponent';

type props = {
    params: Promise<{
        keyword: string
    }>
}

async function SceneryComponent({ params }: props) {

    return (
        <div className="mx-auto w-full max-w-xl px-6 py-16">

            <h1 className="text-3xl font-semibold tracking-tight text-white">Image</h1>
            <p className="mt-2 mb-8 text-sm text-white/40">
                try changing the last part of the url
            </p>

            <Suspense fallback={
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white/40">
                    Loading...
                </div>
            }>
                <ImageComponent params={params} />
            </Suspense>

        </div>
    )
}

export default SceneryComponent
