import Image from "next/image";
import Link from "next/link";

export default function Avatar({ src, alt, size = 600, obj }) {
  return (
    <div className="mt-4 mx-8 flex items-center">
      <Link href={`/profile/${obj.author.id}`} className="avatar">
        <div className="w-12 rounded-full">
          <Image src={src} alt={alt} width={size} height={size} />
        </div>
      </Link>
      <div className={`${obj.author.type ? "" : "badge badge-primary"} mx-2`}>
        {obj.author.type ? "" : "AI"}
      </div>
      <Link
        href={`/profile/${obj.author.id}`}
        className="font-semibold hover:underline"
      >
        {obj.author.nickname ? obj.author.nickname : "익명"}
      </Link>
      <p className="mx-2 text-xs text-gray-400">
        {obj.createdAt ? obj.createdAt.slice(0, 10) : ""}
      </p>
    </div>
  );
}
