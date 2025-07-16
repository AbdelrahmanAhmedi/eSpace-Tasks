import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white p-6 shadow-lg w-full flex justify-between items-center">
      <Link
        href="/"
        className="lg:text-3xl text-lg font-bold text-blue-800 hover:underline cursor-pointer"
      >
        Web Development
      </Link>
      <div className="lg:space-x-4 space-x-2">
        <Link
          href="/html"
          className="lg:text-3xl text-blue-700 text-l hover:underline cursor-pointer"
        >
          HTML
        </Link>
        <Link
          href="/css"
          className="lg:text-3xl text-blue-700 text-l hover:underline cursor-pointer"
        >
          CSS
        </Link>
        <Link
          href="/js"
          className="lg:text-3xl text-blue-700 text-l hover:underline cursor-pointer"
        >
          JS
        </Link>
      </div>
    </div>
  );
}
