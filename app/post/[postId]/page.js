export default async function PostDetailsPage({ params }) {
    const postId = Number(params.postId);

    if (postId > 100) {
        return (
            <div style={{ padding: "2rem", textAlign: "center" }}>
                <h1>Post Not Found</h1>
                <p>Sorry, the post with ID {postId} does not exist.</p>
            </div>
        );
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        return (
            <div style={{ padding: "2rem", textAlign: "center" }}>
                <h1>Post Not Found</h1>
                <p>Sorry, the post with ID {postId} does not exist.</p>
            </div>
        );
    }

    const post = await response.json();

    return (
        <div className="post-details-container">
            <h1 className="page-title">Post Details</h1>
            <article className="post-details-card">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
            </article>
        </div>
    );
}
