import Image from "next/image";

export default function Avatar({ src, alt, size = 600 }) {
  return (
    <div className="avatar">
      <div className="w-12 rounded-full">
        <Image src={src} alt={alt} width={size} height={size} />
      </div>
    </div>
  );
}
