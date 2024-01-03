import Link from "next/link";

export function CommentListCard({ id, content, handleCommentDelete }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2">
      <div className="card-body py-4">
        <div className="flex">
          <p>{content}</p>
          <button
            onClick={() => handleCommentDelete(id)}
            className="btn btn-xs btn-error"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
