import Image from "next/image";

export function ProfileCard({ user }) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
        <figure className="pt-20 pb-2">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
                width={360}
                height={360}
              />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center h-72">
          <h2 className="card-title">{user?.nickname}</h2>
          <p>{user?.intro}</p>
          <div className="card-actions">
            <button className="btn btn-primary">친구 맺기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
