import Link from "next/link";

export default async function Post() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 60 },
    });

    const posts = await response.json();

    return (
        <div className="posts-container">
            <h1 className="posts-heading">All Posts</h1>
            {posts.map((post) => (
                <Link key={post.id} href={`/post/${post.id}`} className="post-card">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </Link>
            ))}
        </div>
    );
}
