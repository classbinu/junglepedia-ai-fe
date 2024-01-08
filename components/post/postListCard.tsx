import Link from "next/link";

export function PostListCard({  post }) {
  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  return (
    <Link href={`/posts/${post.id}`}>
      <div className="card w-full bg-base-100 shadow-xl m-2 hover:-translate-y-1 hover:shadow-2xl">
        <div className="card-body py-4">
          {post.isPrivate ? (
            <div className="badge badge-accent">비공개</div>
          ) : (
            ""
          )}
          <h2 className="card-title">{post.title}</h2>
          <p className="text-base-300">{truncateText(post.content, 100)}</p>
        </div>
      </div>
    </Link>
  );
}
