import topics from "@/data/topics";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto pt-40">
      <h1 className="text-6xl font-semibold mb-10 animate__animated animate__fadeInUp">
        개발자 면접 준비는
      </h1>
      <h1
        className="text-6xl font-bold mb-10 text-primary animate__animated animate__fadeInUp"
        style={{ animationDelay: "0.5s" }}
      >
        정글피디아 AI
      </h1>
      <p
        className="text-3xl text-primary mb-1 animate__animated animate__fadeInUp"
        style={{ animationDelay: "1s" }}
      >
        {`${topics.length.toLocaleString()}개의 기술 면접 질문이 준비되어 있어요`}
      </p>
      <p
        className="text-3xl text-primary animate__animated animate__fadeInUp"
        style={{ animationDelay: "1s" }}
      >
        {`AI 튜터에게 피드백을 받아 보세요`}
      </p>
    </main>
  );
}
