import Link from "next/link";

export default function NotFound() {
    return (
        <main style={{ textAlign: "center", marginTop: "4rem" }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/">
                <a style={{ color: "teal", fontWeight: "bold" }}>Go Back Home</a>
            </Link>
        </main>
    );
}
