import Link from "next/link";

export function MainNav() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>모의면접</a>
            </li>
            <li>
              <Link href="/posts">답변보기</Link>
            </li>
            <li>
              <a>문의</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          정글피디아
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>모의면접</a>
          </li>
          <li>
            <Link href="/posts">답변보기</Link>
          </li>
          <li>
            <a>문의</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
}
