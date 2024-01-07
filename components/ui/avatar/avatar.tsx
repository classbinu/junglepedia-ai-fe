import Image from "next/image";

export default function Avatar({ src, alt, size = 600, obj }) {
  return (
    <div className="mt-4 mx-8 flex items-center">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <Image src={src} alt={alt} width={size} height={size} />
        </div>
      </div>
      <div className={`${obj.author.type ? "" : "badge badge-primary"} mx-2`}>
        {obj.author.type ? "" : "AI"}
      </div>
      <p className="font-semibold">
        {obj.author.nickname ? obj.author.nickname : "익명"}
      </p>
      <p className="mx-2 text-xs text-gray-400">
        {obj.createdAt ? obj.createdAt.slice(0, 10) : ""}
      </p>
    </div>
  );
}
