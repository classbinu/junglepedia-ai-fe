import Link from "next/link";

export function CommentListCard({
  comment,
  handleCommentDelete,
  decodedToken,
}) {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2">
      <div className="card-body py-4">
        <div className="flex">
          <p>{comment.content}</p>
          <button
            onClick={() => handleCommentDelete(comment.id)}
            className={`btn btn-xs btn-error ${
              decodedToken && decodedToken.sub === comment.author.id
                ? ""
                : "hidden"
            }`}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
