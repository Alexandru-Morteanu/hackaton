import "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-[70vh] justify-center flex items-center flex-col w-full">
      <h1
        className=" flex justify-center content-center text-center font-bold text-gray-200 text-8xl p-5"
        style={{ fontFamily: "DM Serif Display, serif" }}
      >
        Recycle with
      </h1>
      <h2>
        <span className="text-green-100 flex justify-center content-center font-bold text-8xl p-5">
          PinBin<span className="text-red-700 ">!</span>
        </span>
      </h2>

      <p className="text-center flex justify-center content-center font-bold text-gray-200 text-xl animate-pulse">
        Quia est nostrum et aliquid architecto omnis earum quis.est beatae
        <br />
        etvel quam oditAtque officiis ab distinctio dolores labore.
      </p>
      <Link href="">
        <div className="animate-bounce mt-20 p-2 rounded-full bg-[#27272A] border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
