import { CommentInput } from "../comment/commentInput";

export function PostDetailCard({
  id,
  post,
  onSubmit,
  comment,
  setComment,
  handleDelete,
  disabled,
  decodedToken,
}) {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2">
      <div className="card-body py-20">
        <h2 className="card-title font-bold text-4xl">{post.title}</h2>
        <div className="divider"></div>
        <p>{post.content}</p>
        <div className="text-right">
          <button
            onClick={() => handleDelete(id)}
            className={`btn btn-xs btn-error ${
              decodedToken && decodedToken.sub === post.author.id
                ? ""
                : "hidden"
            }`}
          >
            삭제
          </button>

          <div className="divider"></div>
        </div>
        {/* <Link href="/posts" className="btn btn-primary w-36">목록으로 돌아가기</Link> */}
        <CommentInput
          onSubmit={onSubmit}
          comment={comment}
          setComment={setComment}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
