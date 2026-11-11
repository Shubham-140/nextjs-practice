import Image from 'next/image'
import { Suspense } from 'react';
import ImageComponent from '../ImageComponent';

type props = {
    params: Promise<{
        keyword: string
    }>
}

async function SceneryComponent({ params }: props) {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ImageComponent params={params} />
        </Suspense>
    )
}

export default SceneryComponent
