export type BookStatus = 'Lido' | 'Não lido';

export interface Book {
  _id: string;
  title: string;
  author: string;
  status: BookStatus;
}

export interface NewBook {
  title: string;
  author: string;
  status: BookStatus;
}

export interface BookFormData {
  title: string;
  author: string;
  status: BookStatus;
}

export interface BookFormProps {
  onAddBook: (book: NewBook) => Promise<void>;
}

export interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
  onToggleStatus: (book: Book) => void;
}

export interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
  onToggleStatus: (book: Book) => void;
}
