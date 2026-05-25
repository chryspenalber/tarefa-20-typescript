import axios from 'axios';
import { Book, NewBook } from './types';

// Atualize esta URL com o seu endpoint do crudcrud.com
export const API_URL = 'https://crudcrud.com/api/f8df8013983542afb7d27fe403526558/livros';

export async function fetchBooks(): Promise<Book[]> {
  const response = await axios.get<Book[]>(API_URL);
  return response.data;
}

export async function createBook(book: NewBook): Promise<Book> {
  const response = await axios.post<Book>(API_URL, book);
  return response.data;
}

export async function deleteBook(id: string): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}

export async function updateBook(book: Book): Promise<Book> {
  const { _id, ...payload } = book;
  const response = await axios.put<Book>(`${API_URL}/${_id}`, payload);
  return response.data;
}
