import Navbar from '@/components/Navbar'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-black text-white">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}

export default layout
