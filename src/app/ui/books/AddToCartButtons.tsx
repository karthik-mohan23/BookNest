"use client";
import { toast } from "sonner";
import { BookListProps } from "./BookList";
import { useCartContext } from "@/app/context/CartContext";

function AddToCartButtons({ book }: { book: BookListProps }) {
  const { addToCart } = useCartContext();

  const handleAddToCart = (reason: string) => {
    toast.success(`${book.title} added to cart`);
    const newData = { ...book, type: reason };
    addToCart(newData);
  };

  return (
    <div className="flex items-center justify-between px-5 pt-2">
      <button
        onClick={() => handleAddToCart("rent")}
        className="px-5 py-1 text-xl border border-indigo-600 rounded-lg hover:bg-indigo-500 hover:text-white text-indigo-700 duration-300">
        Rent
      </button>
      <button
        onClick={() => handleAddToCart("buy")}
        className="px-5 py-1 text-xl border border-indigo-600 bg-indigo-500 rounded-lg hover:bg-indigo-900  text-white duration-300">
        Buy
      </button>
    </div>
  );
}
export default AddToCartButtons;
