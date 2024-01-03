import Link from "next/link";

export function PostListCard({ id, title, content }) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="card w-full bg-base-100 shadow-xl m-2">
        <div className="card-body py-4">
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </Link>
  );
}
