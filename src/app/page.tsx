import Link from "next/link";

function page() {
  return (
    <div className="relative min-h-screen w-full  flex items-center justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-5xl md:text-9xl font-bold text-indigo-100">
          Book<span className="text-indigo-500">Nest</span>
        </h1>
        <Link
          href="/store"
          className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-indigo-800 px-6 font-medium text-white z-20 hover:bg-indigo-900 duration-300">
          <span className="hover:scale-105 duration-300">Go to store</span>
          <div className="ml-1 transition duration-300 group-hover:rotate-[360deg]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5">
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default page;
