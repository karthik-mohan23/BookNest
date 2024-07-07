"use client";

import { useCartContext } from "@/app/context/CartContext";
import { BookDetailsProps } from "./BookDetails";
import { toast } from "sonner";

const BuyOrRentBtns = ({ book }: { book: BookDetailsProps }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = (reason: string) => {
    toast.success(`${book.title} added to cart`);
    const newData = { ...book, type: reason };
    addToCart(newData);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="">
        <button
          onClick={() => handleAddToCart("buy")}
          className="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded">
          Buy this book for {book.sellPrice} INR
        </button>
      </div>
      <div className="">
        <button
          onClick={() => handleAddToCart("rent")}
          className="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded">
          Rent this book for {book.rentPrice} INR/pm
        </button>
      </div>
    </div>
  );
};

export default BuyOrRentBtns;
