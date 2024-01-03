import Link from "next/link";

export function CommentListCard({ id, content }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2">
      <div className="card-body py-4">
        <p>{content}</p>
      </div>
    </div>
  );
}
