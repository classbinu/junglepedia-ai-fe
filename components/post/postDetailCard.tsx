import { CommentInput } from "../comment/commentInput";
import Link from "next/link";

export function PostDetailCard({
  id,
  title,
  content,
  onSubmit,
  comment,
  setComment,
}) {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2">
      <div className="card-body py-20">
        <h2 className="card-title font-bold text-4xl">{title}</h2>
        <div className="divider"></div>
        <p>{content}</p>
        <div className="divider"></div>
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
