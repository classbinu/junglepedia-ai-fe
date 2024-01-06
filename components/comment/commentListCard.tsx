import Avatar from "../ui/common/avatar";
import Link from "next/link";

export function CommentListCard({
  comment,
  handleCommentDelete,
  decodedToken,
}) {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2">
      <div className="mt-4 mx-8 flex items-center">
        <Avatar
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="avatar"
        />
        <div className="badge badge-primary mx-2">AI</div>
        <p className="font-semibold">Lisa</p>
      </div>
      <div className="card-body py-4">
        <p>{comment.content}</p>
        <div className="text-right">
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
      <div></div>
    </div>
  );
}
