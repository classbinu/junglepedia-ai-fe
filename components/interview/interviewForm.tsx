import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";

export function InterviewForm({
  onSubmit,
  answer,
  setAnswer,
  answerPostLoading,
  buttonText,
}) {
  const isLoggedIn = useContext(AppContext).isLoggedIn;
  const maxAnswerLength = 1000;
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <textarea
          name="answer"
          placeholder={
            isLoggedIn ? "답변을 입력해주세요." : "로그인이 필요합니다."
          }
          className="textarea textarea-bordered textarea-primary"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            if (e.target.value.length > maxAnswerLength) {
              alert("답변은 1000자를 넘을 수 없습니다.");
              setAnswer(e.target.value.slice(0, maxAnswerLength));
            }
          }}
          rows={10}
          disabled={!isLoggedIn}
          maxLength={maxAnswerLength}
        ></textarea>
      </div>
      <div className="form-control mt-2">
        <input
          type="submit"
          value={isLoggedIn ? buttonText : "로그인이 필요합니다."}
          className="btn btn-primary"
          disabled={!isLoggedIn || answerPostLoading}
        />
      </div>
    </form>
  );
}
