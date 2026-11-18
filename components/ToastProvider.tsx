"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import Toaster from "./Toaster";

type Toast = {
    heading: string,
    message: string
}

type ToastContextValue = {
    showToast: (toast: Toast) => void
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toast, setToast] = useState<(Toast & { id: number }) | null>(null);

    const showToast = useCallback((toast: Toast) => {
        setToast({ ...toast, id: Date.now() });
    }, []);

    const closeToast = useCallback(() => setToast(null), []);

    const value = useMemo(() => ({ showToast }), [showToast]);

    return (
        <ToastContext.Provider value={value}>
            {children}
            {toast && (
                <Toaster
                    key={toast.id}
                    heading={toast.heading}
                    message={toast.message}
                    show
                    onClose={closeToast}
                />
            )}
        </ToastContext.Provider>
    )
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used inside ToastProvider");
    }
    return context;
}
