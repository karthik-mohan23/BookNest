import Image from "next/image";
import BuyOrRentBtns from "./BuyOrRentBtns";

export type BookDetailsProps = {
  id: string;
  title: string;
  description: string;
  author: string;
  cover: string;
  genre: string;
  pages: number;
  isRented: boolean;
  stock: number;
  rentPrice: number;
  sellPrice: number;
  sold: number;
  ISBN: string;
};

const BookDetails = ({ book }: { book: BookDetailsProps }) => {
  return (
    <div className="  py-10 flex flex-col justify-center items-center ">
      <div className="flex justify-center mb-4">
        <Image
          className=""
          src={book.cover}
          alt={book.title}
          width={150}
          height={150}
          priority={true}
        />
      </div>
      <div className="px-2 max-w-xl flex flex-col items-center justify-center">
        <p className="text-3xl">
          {book.title} by {book.author}
        </p>
        <p className="mt-3 mx-auto">{book.description}</p>
        <div className="text-xl mt-3 mb-5">
          <p>
            {book.genre} - {book.pages} pages -{" "}
            {book.stock ? `${book.stock} pieces are in stock` : `No Stock`}
          </p>
        </div>
        <BuyOrRentBtns book={book} />
      </div>
    </div>
  );
};

export default BookDetails;
