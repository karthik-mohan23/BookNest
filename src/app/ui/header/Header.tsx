import Link from "next/link";

import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <nav className="py-4">
      <div className="max-w-6xl w[90%] mx-auto">
        <div className="flex gap-4 items-center">
          <Bars3BottomLeftIcon className="h-6 w-6 text-gray-500 md:hidden" />
          <Link href="/store">
            <h2 className="text-xl font-bold">
              Book<span className="text-indigo-700">Nest</span>
            </h2>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Header;
