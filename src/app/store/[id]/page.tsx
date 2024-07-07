import { getBookById } from "../../lib/fakeData";
import BookDetails from "@/app/ui/books/BookDetails";

function BookDetailsPage({ params: { id } }: { params: { id: string } }) {
  const book = getBookById(id);

  if (!book) {
    return <div>No book details available.</div>;
  }

  return <BookDetails book={book} />;
}
export default BookDetailsPage;
