import Avatar from "../ui/common/avatar";

export function CommentListCard({
  comment,
  handleCommentDelete,
  commentDeleteLoading,
  decodedToken,
}) {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2">
      <div className="mt-4 mx-8 flex items-center">
        <Avatar
          src={
            (comment.author && comment.author.avatar) ||
            "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          }
          alt="avatar"
        />
        <div className="badge badge-primary mx-2">{comment.author.type ? "Human" : "AI"}</div>
        <p className="font-semibold">{comment.author.nickname ? comment.author.nickname : "익명"}</p>
      </div>
      <div className="card-body py-4">
        <p>{comment.content}</p>
        <div className="text-right">
          <button
            onClick={() => handleCommentDelete(comment.id)}
            disabled={commentDeleteLoading}
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
