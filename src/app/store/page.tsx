import { getAllBooks } from "../lib/fakeData";
import BookList from "../ui/books/BookList";

function BookListPage() {
  const books = getAllBooks();

  return <BookList books={books} />;
}
export default BookListPage;
