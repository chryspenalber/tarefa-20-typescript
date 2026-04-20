import { BookListProps } from '../types';
import BookItem from './BookItem';

function BookList({ books, onDelete, onToggleStatus }: BookListProps) {
  if (books.length === 0) {
    return <p>Nenhum livro cadastrado no momento.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book._id} book={book} onDelete={onDelete} onToggleStatus={onToggleStatus} />
      ))}
    </div>
  );
}

export default BookList;
