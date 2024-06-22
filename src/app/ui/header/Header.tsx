import Link from "next/link";

function Header() {
  return (
    <nav className="py-4 shadow-lg ">
      <div className="max-w-6xl w[90%] mx-auto">
        <Link href="/store">
          <h2 className="text-xl font-bold">
            Book<span className="text-indigo-700">Nest</span>
          </h2>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
