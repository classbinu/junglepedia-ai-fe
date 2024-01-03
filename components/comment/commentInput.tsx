export function CommentInput({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <textarea
          name="content"
          placeholder="댓글을 입력해주세요."
          className="textarea textarea-bordered textarea-primary"
        ></textarea>
      </div>
      <div className="form-control mt-2">
        <input type="submit" value="댓글 작성" className="btn" />
      </div>
    </form>
  );
}
