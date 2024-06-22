import BookCard from "./BookCard";

export type BookListProps = {
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

function BookList({ books }: { books: BookListProps[] }) {
  return (
    <div className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] p-16 lg:pe-0">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
export default BookList;
