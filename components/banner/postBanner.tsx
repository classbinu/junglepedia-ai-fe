import Image from "next/image";

export function PostBanner() {
  return (
    <>
      <div className="rounded-full">
        <a href="https://jungle.krafton.com/" target="_blank">
          <Image
            src="/images/banner.png"
            alt="banner"
            width={1408}
            height={211}
            className="rounded-2xl"
          />
        </a>
      </div>
    </>
  );
}
