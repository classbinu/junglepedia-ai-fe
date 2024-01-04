import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto pt-40">
      <h1 className="text-6xl font-semibold mb-10 animate__animated animate__fadeInUp">
        개발자 면접 준비는
      </h1>
      <h1
        className="text-6xl font-semibold animate__animated animate__fadeInUp"
        style={{ animationDelay: "0.5s" }}
      >
        정글피디아
      </h1>
    </main>
  );
}
