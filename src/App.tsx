import { useEffect, useState } from 'react';
import { Book, NewBook } from './types';
import { createBook, deleteBook, fetchBooks, updateBook } from './api';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function loadBooks() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchBooks();
      setBooks(data);
    } catch (err) {
      setError('Não foi possível carregar os livros.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  async function handleAddBook(book: NewBook) {
    try {
      const newBook = await createBook(book);
      setBooks((current: Book[]) => [...current, newBook]);
    } catch (err) {
      setError('Não foi possível adicionar o livro.');
    }
  }

  async function handleDeleteBook(id: string) {
    try {
      await deleteBook(id);
      setBooks((current: Book[]) => current.filter((book) => book._id !== id));
    } catch (err) {
      setError('Não foi possível remover o livro.');
    }
  }

  async function handleToggleStatus(book: Book) {
    try {
      const newStatus: 'Lido' | 'Não lido' = book.status === 'Lido' ? 'Não lido' : 'Lido';
      const updatedBook: Book = {
        ...book,
        status: newStatus,
      };
      await updateBook(updatedBook);
      setBooks((current: Book[]) => current.map((item) => (item._id === book._id ? updatedBook : item)));
    } catch (err) {
      setError('Não foi possível atualizar o status.');
    }
  }

  return (
    <main className="app-shell">
      <header>
        <h1>Catálogo de Livros</h1>
        <p>Gerencie seus livros com listagem, inclusão e remoção via API.</p>
      </header>

      <section className="section">
        <h2>Adicionar novo livro</h2>
        <BookForm onAddBook={handleAddBook} />
      </section>

      <section className="section">
        <h2>Livros cadastrados</h2>
        {loading ? (
          <p className="loading-message">Carregando livros...</p>
        ) : (
          <BookList books={books} onDelete={handleDeleteBook} onToggleStatus={handleToggleStatus} />
        )}
        {error ? <p className="error-message">{error}</p> : null}
      </section>
    </main>
  );
}

export default App;
