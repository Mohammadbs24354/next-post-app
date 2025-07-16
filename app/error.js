"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="error-page">
            <h1>Something went wrong</h1>
            <p>Sorry for the inconvenience. Please try again later.</p>
            <div className="error-links">
                <button className="btn" onClick={() => reset()}>Try Again</button>
                <Link href="/" className="btn">Home</Link>
                <Link href="/post" className="btn">Posts</Link>
            </div>
        </main>
    );
}
