"use client";

import { useEffect, useState } from "react";

import { InterviewForm } from "@/components/interview/interviewForm";
import topics from "@/data/topics";
import { useRouter } from "next/navigation";

export default function InterviewPage() {
  const route = useRouter();

  const [topic, setTopic] = useState("");
  const [answer, setAnswer] = useState("");

  const selectTopic = () => {
    setTopic("");
    setTimeout(() => {
      const pickedTopic = topics[Math.floor(Math.random() * topics.length)];
      setTopic(pickedTopic);
    }, 2000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let content = answer;

    if (content === "") {
      return alert("답변을 입력해주세요.");
    }

    const newAnswer = { content };
    newAnswer["title"] = topic;

    try {
      setAnswer("");
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
        body: JSON.stringify(newAnswer),
      });
      const data = await res.json();
      if (data.id) {
        route.push(`/posts/${data.id}`);
      } else {
        alert("답변을 저장할 수 없습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    selectTopic();
  }, []);

  return (
    <>
      <div className="h-20">
        <div className="text-center mt-10">
          {topic === "" ? (
            <span className="loading loading-bars loading-lg"></span>
          ) : (
            <h1 className="text-3xl font-semibold">{topic}</h1>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="btn" onClick={selectTopic}>
          다른 문제
        </button>
      </div>
      <div className="divider"></div>
      <InterviewForm
        onSubmit={onSubmit}
        answer={answer}
        setAnswer={setAnswer}
      />
    </>
  );
}
