import { CommentInput } from "../comment/commentInput";
import Link from "next/link";

export function PostDetailCard({
  id,
  title,
  content,
  onSubmit,
  comment,
  setComment,
  handleDelete,
}) {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2">
      <div className="card-body py-20">
        <h2 className="card-title font-bold text-4xl">{title}</h2>
        <div className="divider"></div>
        <p>{content}</p>
        <div className="text-right">
          <button
            onClick={() => handleDelete(id)}
            className="btn btn-xs btn-error"
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
        />
      </div>
    </div>
  );
}
