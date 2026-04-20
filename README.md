[Versão em Português](#portugues) | [English Version](#english)

---

<a id="portugues"></a>
## Versão em Português

# Catálogo de Livros - Aplicação React com Vite + TypeScript
**Projeto desenvolvido por Chrys Penalber**

Este projeto faz parte de um exercício prático do **curso de Engenheiro Front-End da EBAC**.

O objetivo foi **desenvolver uma aplicação web moderna para gerenciamento de livros utilizando React, Vite e TypeScript**, aplicando conceitos de componentes reutilizáveis, tipagem estática, estado, integração com API e boas práticas de organização de código.

---

## Links

[**Repositório no GitHub (tarefa-20)**](https://github.com/chryspenalber/tarefa-20)

[**Deploy**](tarefa-20-typescript.vercel.app)

---

## Objetivo

- Criar uma aplicação React moderna e bem estruturada
- Desenvolver componentes reutilizáveis (`BookForm`, `BookList`, `BookItem`)
- Aplicar conceitos fundamentais do React (props, estado e ciclo de vida)
- Utilizar **TypeScript** para tipagem estática da aplicação
- Realizar integração com API REST para listar, adicionar, remover e atualizar status de livros
- Utilizar **Vite** para build rápido e otimizado

---

## Estrutura de Arquivos

```text
projeto
|-- index.html
|-- package.json
|-- src/
|   |-- main.tsx
|   |-- App.tsx
|   |-- styles.css
|   |-- api.ts
|   |-- types.ts
|   `-- components/
|       |-- BookForm.tsx
|       |-- BookItem.tsx
|       `-- BookList.tsx
```

---

## Componentes

- **App.tsx** - Componente raiz com regras de negócio e gerenciamento de estado
- **BookForm** - Formulário para cadastro de novos livros
- **BookList** - Renderiza a lista de livros cadastrados
- **BookItem** - Exibe os dados de cada livro e ações (remover/alterar status)

---

## Pré-requisitos

- **Node.js** (v18 ou superior)
- **npm** ou **yarn**

---

## Instalação

```bash
npm install
```

---

## Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173/`

---

## Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Bundler e servidor de desenvolvimento ultra-rápido
- **Axios** - Cliente HTTP para comunicação com API REST

---

## Autor

- GitHub - [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn - [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

---

<a id="english"></a>
## English Version

# Book Catalog - React Application with Vite + TypeScript
**Project developed by Chrys Penalber**

This project is part of a practical exercise from the **EBAC Front-End Engineering course**.

The goal was to **develop a modern web application for book management using React, Vite, and TypeScript**, applying concepts of reusable components, static typing, state management, API integration, and best practices in code organization.

---

## Links

[**GitHub Repository (tarefa-20)**](https://github.com/chryspenalber/tarefa-20)

[**Deploy**](tarefa-20-typescript.vercel.app)

---

## Project Goals

- Build a modern and well-structured React application
- Develop reusable components (`BookForm`, `BookList`, `BookItem`)
- Apply fundamental React concepts (props, state, lifecycle)
- Use **TypeScript** for static type safety
- Integrate with a REST API to list, create, delete, and update book status
- Use **Vite** for fast and optimized builds

---

## File Structure

```text
project
|-- index.html
|-- package.json
|-- src/
|   |-- main.tsx
|   |-- App.tsx
|   |-- styles.css
|   |-- api.ts
|   |-- types.ts
|   `-- components/
|       |-- BookForm.tsx
|       |-- BookItem.tsx
|       `-- BookList.tsx
```

---

## Components

- **App.tsx** - Root component with business rules and state management
- **BookForm** - Form component to add new books
- **BookList** - Renders the list of registered books
- **BookItem** - Displays each book data and actions (delete/toggle status)

---

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

---

## Installation

```bash
npm install
```

---

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

---

## Technologies Used

- **React 18** - Library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Vite** - Ultra-fast bundler and development server
- **Axios** - HTTP client for REST API communication

---

## Author

- GitHub - [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn - [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)
