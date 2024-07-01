"use client";
import { toast } from "sonner";
import { BookListProps } from "./BookList";

function AddToCartButtons({ book }: { book: BookListProps }) {
  const addToCart = (reason: string) => {
    toast.success(`${book.title} added to cart`);
    const newData = { ...book, type: reason };
  };

  return (
    <div className="flex items-center justify-between px-5 pt-2">
      <button
        onClick={() => addToCart("rent")}
        className="px-5 py-1 text-xl border border-indigo-600 rounded-lg hover:bg-indigo-500 hover:text-white text-indigo-700 duration-300">
        Rent
      </button>
      <button
        onClick={() => addToCart("buy")}
        className="px-5 py-1 text-xl border border-indigo-600 bg-indigo-500 rounded-lg hover:bg-indigo-900  text-white duration-300">
        Buy
      </button>
    </div>
  );
}
export default AddToCartButtons;
