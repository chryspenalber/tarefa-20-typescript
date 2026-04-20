import { useState, FormEvent, ChangeEvent } from 'react';
import { BookFormData, BookFormProps } from '../types';

const initialForm: BookFormData = {
  title: '',
  author: '',
  status: 'Não lido',
};

function BookForm({ onAddBook }: BookFormProps) {
  const [formData, setFormData] = useState<BookFormData>(initialForm);
  const [submitting, setSubmitting] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    await onAddBook({
      title: formData.title.trim(),
      author: formData.author.trim(),
      status: formData.status,
    });

    setFormData(initialForm);
    setSubmitting(false);
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <label>
        Título
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Insira o título do livro"
        />
      </label>

      <label>
        Autor
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          placeholder="Nome do autor"
        />
      </label>

      <label>
        Status
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Não lido">Não lido</option>
          <option value="Lido">Lido</option>
        </select>
      </label>

      <button className="primary" type="submit" disabled={submitting}>
        {submitting ? 'Adicionando...' : 'Adicionar livro'}
      </button>
    </form>
  );
}

export default BookForm;
