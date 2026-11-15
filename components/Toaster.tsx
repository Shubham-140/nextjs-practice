"use client"

import { useEffect } from "react";

type ToasterProps = {
    heading: string,
    message: string,
    show: boolean,
    onClose: () => void,
    duration?: number
}

export default function Toaster({ heading, message, show, onClose, duration = 4000 }: ToasterProps) {

    useEffect(() => {
        if (!show) return;

        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [show, duration, onClose]);

    if (!show) return null;

    return (
        <div
            role="status"
            className="fixed top-5 right-5 z-50 w-80 rounded-lg border border-white/15 bg-neutral-900 p-4 shadow-lg shadow-black/50"
        >
            <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-white">{heading}</p>
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="cursor-pointer text-xs text-white/40 hover:text-white"
                >
                    ✕
                </button>
            </div>
            <p className="mt-1 text-xs leading-5 text-white/50">{message}</p>
        </div>
    )
}
