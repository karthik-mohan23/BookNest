"use client";

import { BookDetailsProps } from "./BookDetails";

const BuyOrRentBtns = ({ book }: { book: BookDetailsProps }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Buy this book for {book.sellPrice} INR
        </button>
      </div>
      <div className="">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Rent this book for {book.rentPrice} INR/pm
        </button>
      </div>
    </div>
  );
};

export default BuyOrRentBtns;
