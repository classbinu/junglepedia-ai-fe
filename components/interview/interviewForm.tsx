export function InterviewForm({ onSubmit, answer, setAnswer }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <textarea
          name="answer"
          placeholder="답변을 입력해주세요."
          className="textarea textarea-bordered textarea-primary"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={10}
        ></textarea>
      </div>
      <div className="form-control mt-2">
        <input type="submit" value="답변 제출" className="btn" />
      </div>
    </form>
  );
}
