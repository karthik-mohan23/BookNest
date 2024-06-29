import Image from "next/image";
import { BookListProps } from "./BookList";
import Link from "next/link";

function BookCard({ book }: { book: BookListProps }) {
  return (
    <Link
      href={`/store/${book.id}`}
      className=" border border-gray-500 rounded-md p-2">
      <div>
        <Image
          src={book.cover}
          alt={book.title}
          width={150}
          height={100}
          className=" object-fill w-full h-80 hover:scale-105 duration-300 p-2"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 py-2">
        <h1 className="text-lg font-semibold">
          {book.title.length > 17
            ? book.title.slice(0, 16) + "..."
            : book.title}
        </h1>
        <p>
          Author: <span className="text-lg ">{book.author}</span>
        </p>
        <div className="flex justify-between pe-2 gap-2 items-center">
          <p className="text-lg ">{book.genre}</p>
          <p>
            {book.stock ? (
              <span className="text-green-700">In stock </span>
            ) : (
              <span className="text-orange-500">Out of stock</span>
            )}
          </p>
        </div>
        <div className="flex items-center justify-between px-5 pt-2">
          <button className="px-5 py-1 text-xl border border-indigo-600 rounded-lg hover:bg-indigo-500 hover:text-white text-indigo-700 duration-300">
            Rent
          </button>
          <button className="px-5 py-1 text-xl border border-indigo-600 bg-indigo-500 rounded-lg hover:bg-indigo-900  text-white duration-300">
            Buy
          </button>
        </div>
      </div>
    </Link>
  );
}
export default BookCard;
