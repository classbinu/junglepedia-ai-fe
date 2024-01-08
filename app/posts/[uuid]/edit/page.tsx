"use client";

import { useEffect, useState } from "react";

import { InterviewForm } from "@/components/interview/interviewForm";
import Swal from "sweetalert2";
import { getAccessTokenAndValidate } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function EditPostPage({ params }: { params: { uuid: string } }) {
  const route = useRouter();

  const [isPrivate, setIsPrivate] = useState(false);
  const [answer, setAnswer] = useState("");
  const [answerPostLoading, setAnswerPostLoading] = useState(false);
  const [postDeleteLoading, setPostDeleteLoading] = useState(false);

  const fetchPost = async (uuid: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${uuid}`
      );
      const post = await response.json();
      setAnswer(post.content);
      setIsPrivate(post.isPrivate);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let content = answer;

    if (content === "") {
      return alert("답변을 입력해주세요.");
    }

    setAnswerPostLoading(true);

    const newAnswer = { content, isPrivate };

    try {
      const accessToken = await getAccessTokenAndValidate();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${params.uuid}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(newAnswer),
        }
      );
      setAnswerPostLoading(false);
      const data = await res.json();
      if (data.id) {
        Swal.close();
      } else {
        alert("답변을 저장할 수 없습니다.");
      }
      route.push(`/posts/${params.uuid}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostDelete = async (id: string) => {
    const confirm = await Swal.fire({
      title: "정말로 삭제하시겠습니까?",
      text: "삭제하면 복구할 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    });
    if (!confirm.isConfirmed) return;

    setPostDeleteLoading(true);
    try {
      const accessToken = await getAccessTokenAndValidate();

      await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setPostDeleteLoading(false);
      route.push("/posts");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost(params.uuid);
  }, [params.uuid]);

  return (
    <div className="mt-20">
      <InterviewForm
        onSubmit={onSubmit}
        isPrivate={isPrivate}
        setIsPrivate={setIsPrivate}
        answer={answer}
        setAnswer={setAnswer}
        answerPostLoading={answerPostLoading}
        buttonText="답변 수정"
      />
      <div className="label">
        <span className="label-text-alt text-primary">
          * 답변을 수정해도 AI 댓글은 변경되지 않습니다.
        </span>
      </div>
      <div className="text-center">
        <button
          className={"text-error mt-10 hover:underline"}
          onClick={() => handlePostDelete(params.uuid)}
          disabled={postDeleteLoading}
        >
          답변 삭제
        </button>
      </div>
    </div>
  );
}
