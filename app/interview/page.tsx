"use client";

import { useEffect, useState } from "react";

import { InterviewForm } from "@/components/interview/interviewForm";
import Swal from "sweetalert2";
import topics from "@/data/topics";
import { useRouter } from "next/navigation";

export default function InterviewPage() {
  const route = useRouter();

  const [topic, setTopic] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
    showAdModal();

    const newAnswer = { content };
    newAnswer["title"] = topic;

    try {
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
        Swal.close();
        route.push(`/posts/${data.id}`);
      } else {
        alert("답변을 저장할 수 없습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const showAdModal = () => {
    let timerInterval;
    Swal.fire({
      title: "AI가 답변을 분석하고 있어요🤖",
      html: `<img src="https://swjungle.net/static/hub/images/graduate06.png"
      alt="Custom image" id="ad" class="block mx-auto cursor-pointer">
      분석 완료 예정까지 <b></b>ms 남았어요.`,
      timer: 50000,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      didRender: () => {
        document.getElementById("ad").onclick = function () {
          open("https://jungle.krafton.com/");
        };
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
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
        <button
          className="btn btn-outline btn-primary"
          disabled={isLoading}
          onClick={selectTopic}
        >
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
