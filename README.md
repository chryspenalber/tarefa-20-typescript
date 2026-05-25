[Versão em Português](#portugues) | [English Version](#english)

---
<a id="portugues"></a>
## Versão em Português

# Catálogo de Livros — React + TypeScript
**Projeto desenvolvido por Chrys Penalber**

Aplicação simples que consome uma API REST para listar, criar, atualizar e remover livros. Implementada com **React** e **TypeScript**, empacotada com **Vite** e realizando requisições HTTP com `axios` (ver `src/api.ts`).

---

## Objetivos

- Implementar operações básicas de catálogo: listar, adicionar, alternar status (`Lido` / `Não lido`) e remover livros.
- Demonstrar integração com uma API externa usando `axios` e tipagem com TypeScript.
- Organizar a interface em componentes reutilizáveis (`BookForm`, `BookList`, `BookItem`).

---

## Links

- [**Live Site**](https://tarefa-20-typescript.vercel.app/)
- [**Repositório no GitHub**](https://github.com/chryspenalber)

---

## Principais Funcionalidades

- Listar livros obtidos de um endpoint (configurado em `src/api.ts`).
- Adicionar novos livros via formulário (`src/components/BookForm.tsx`).
- Alternar o status do livro entre `Lido` e `Não lido` com persistência via API.
- Remover livros individualmente.

---

## Estrutura do Projeto

```text
index.html
package.json
vite.config.ts
tsconfig.json
src/
  api.ts
  App.tsx
  main.tsx
  styles.css
  types.ts
  components/
    BookForm.tsx
    BookItem.tsx
    BookList.tsx
```

---

## Estilos

- Estilos globais e regras visuais estão em `src/styles.css`.
- A interface utiliza layout baseado em grid e Flexbox com classes simples para responsividade básica.

---

## Tecnologias

- React — Biblioteca de UI
- TypeScript — Tipagem estática para componentes e lógica
- Vite — Servidor de desenvolvimento e build rápido
- Axios — Cliente HTTP usado em `src/api.ts`
- CSS — Estilos em `src/styles.css`

---

## Como executar

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço fornecido pelo Vite (normalmente `http://localhost:5173`).

---

## Contato

- GitHub — [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn — [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

---

<a id="english"></a>
## English Version

# Book Catalog — React + TypeScript
**Project developed by Chrys Penalber**

Simple application that consumes a REST API to list, create, update and delete books. Built with **React** and **TypeScript**, bundled with **Vite**, and using `axios` for HTTP requests (see `src/api.ts`).

---

## Goals

- Implement basic catalog operations: list, add, toggle status (`Lido` / `Não lido`) and remove books.
- Demonstrate integration with an external API using `axios` and TypeScript typings.
- Keep the UI organized in small reusable components (`BookForm`, `BookList`, `BookItem`).

---

## Links

- [**Live Site**](https://tarefa-20-typescript.vercel.app/)
- [**GitHub Repository**](https://github.com/chryspenalber)

---

## Key Features

- Fetch books from an endpoint configured in `src/api.ts`.
- Add books via `src/components/BookForm.tsx`.
- Toggle book status between `Lido` and `Não lido`, persisting changes through the API.
- Remove books individually.

---

## Project Structure

```text
index.html
package.json
vite.config.ts
tsconfig.json
src/
  api.ts
  App.tsx
  main.tsx
  styles.css
  types.ts
  components/
    BookForm.tsx
    BookItem.tsx
    BookList.tsx
```

---

## Styles

- Global styles are defined in `src/styles.css`.
- Layout uses CSS Grid and Flexbox with simple utility classes for basic responsiveness.

---

## Technologies

- React — UI library
- TypeScript — Static typing for components and logic
- Vite — Dev server & build tool
- Axios — HTTP client used in `src/api.ts`
- CSS — Styling in `src/styles.css`

---

## How to Run

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the address provided by Vite (usually `http://localhost:5173`).

---

## Author / Contact

- GitHub — [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn — [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

