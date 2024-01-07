"use client";

import { useEffect, useState } from "react";

import { InterviewForm } from "@/components/interview/interviewForm";
import Swal from "sweetalert2";
import { getAccessTokenAndValidate } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function EditPostPage({ params }: { params: { uuid: string } }) {
  const route = useRouter();

  const [answer, setAnswer] = useState("");
  const [answerPostLoading, setAnswerPostLoading] = useState(false);

  const fetchPost = async (uuid: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${uuid}`
      );
      const post = await response.json();
      setAnswer(post.content);
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

    const newAnswer = { content };

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
        route.push(`/posts/${params.uuid}`);
      } else {
        alert("답변을 저장할 수 없습니다.");
      }
      route.push(`/posts/${params.uuid}`);
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
        answer={answer}
        setAnswer={setAnswer}
        answerPostLoading={answerPostLoading}
      />
    </div>
  );
}
