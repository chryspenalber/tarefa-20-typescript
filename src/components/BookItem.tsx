import { BookItemProps } from '../types';

function BookItem({ book, onDelete, onToggleStatus }: BookItemProps) {
  return (
    <article className="book-item">
      <div className="book-header">
        <div>
          <h3>{book.title}</h3>
          <p className="book-meta">{book.author}</p>
        </div>
        <span className="status-chip">{book.status}</span>
      </div>

      <div>
        <button className="secondary" type="button" onClick={() => onToggleStatus(book)}>
          {book.status === 'Lido' ? 'Marcar como Não lido' : 'Marcar como Lido'}
        </button>
        <button className="danger" type="button" onClick={() => onDelete(book._id)}>
          Remover
        </button>
      </div>
    </article>
  );
}

export default BookItem;
