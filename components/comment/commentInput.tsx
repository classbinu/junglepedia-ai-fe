import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";

export function CommentInput({ onSubmit, comment, setComment, disabled, buttonText }) {
  const isLoggedIn = useContext(AppContext).isLoggedIn;
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <textarea
          name="content"
          placeholder={
            isLoggedIn ? "댓글을 입력해주세요." : "로그인이 필요합니다."
          }
          className="textarea textarea-bordered textarea-primary"
          value={comment}
          disabled={!isLoggedIn}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="form-control mt-2">
        <input
          type="submit"
          value={isLoggedIn ? buttonText : "로그인이 필요합니다."}
          className="btn btn-primary"
          disabled={disabled || !isLoggedIn}
        />
      </div>
    </form>
  );
}
