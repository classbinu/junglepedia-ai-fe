import Link from "next/link";

export function LoginForm({ onSubmit }) {
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
      <form onSubmit={onSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">이메일</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">비밀번호</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <Link href="/signup" className="label-text-alt link link-hover">
              아직 회원이 아니신가요?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">로그인</button>
        </div>
      </form>
    </div>
  );
}
