import Link from "next/link";

export function PostListCard({ id, title, content }) {
  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  return (
    <Link href={`/posts/${id}`}>
      <div className="card w-full bg-base-100 shadow-xl m-2 hover:-translate-y-1 hover:shadow-2xl">
        <div className="card-body py-4">
          <h2 className="card-title">{title}</h2>
          <p className="text-base-300">{truncateText(content, 100)}</p>
        </div>
      </div>
    </Link>
  );
}
