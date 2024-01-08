import Avatar from "../ui/avatar/avatar";
import { CommentInput } from "../comment/commentInput";
import Link from "next/link";

export function PostDetailCard({
  id,
  post,
  onSubmit,
  comment,
  setComment,
  commentPostLoading,
  decodedToken,
}) {
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2 py-10">
      <Avatar
        src={post.author && post.author.avatar}
        alt={post.author.nickname}
        obj={post}
      />

      <div className="card-body">
        {post.isPrivate ? <div className="badge badge-accent">비공개</div> : ""}
        <h2 className="card-title font-bold text-4xl">{post.title}</h2>
        <div className="divider"></div>
        <p>{post.content}</p>
        <div
          className={`text-right ${
            decodedToken && decodedToken.sub === post.author.id ? "" : "hidden"
          }`}
        >
          <Link
            href={`/posts/${id}/edit`}
            className={`btn btn-xs btn-warning mr-2`}
          >
            수정
          </Link>
          <div className="divider"></div>
        </div>
        {/* <Link href="/posts" className="btn btn-primary w-36">목록으로 돌아가기</Link> */}
        <CommentInput
          onSubmit={onSubmit}
          comment={comment}
          setComment={setComment}
          disabled={commentPostLoading}
          buttonText="댓글 작성"
        />
      </div>
    </div>
  );
}
