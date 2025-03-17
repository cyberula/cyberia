"use client";

import { useEffect, useState } from "react";
import { BackgroundEffect } from "@/components/ui/BackgroundEffect";
import { StaticOverlay } from "@/components/ui/StaticOverlay";

export default function ClientBody({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    // Add state to track if component is mounted on client
    const [isMounted, setIsMounted] = useState(false);

    // Remove any extension-added classes during hydration
    useEffect(() => {
        // This runs only on the client after hydration
        document.body.className = "antialiased";
        setIsMounted(true);
    }, []);

    return (
        <body className="antialiased" suppressHydrationWarning>
        {children}
        {/* Only render client-side components after mount */}
        {isMounted && (
            <>
                <BackgroundEffect />
                <StaticOverlay />
            </>
        )}
        </body>
    );
}
