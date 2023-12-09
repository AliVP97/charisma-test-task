# Charisma Technical Frontend Task

This is a sample Next.js project showcasing a product catalog with product details. The project utilizes React, Next.js, Tailwind CSS, and the `react-query` library for server-side rendering and client-side data fetching.

## Table of Contents

- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)
- [Features](#features)
- [API](#api)
- [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
- [React Query](#react-query)
- [Conclusion](#conclusion)

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone <https://github.com/AliVP97/charisma-test-task.git>
```

2. Navigate to the project folder:

```bash
cd charisma-test-task
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Features

- Product list with details.
- Product detail page with server-side rendering.
- Like status persisted client-side.
- Server-side and client-side data fetching with `react-query`.
- Responsive design with Tailwind CSS.

## API

- `/api/products`: API endpoint for fetching all products.
- `/api/products/[id]`: API endpoint for fetching a specific product by ID.

## Server-Side Rendering (SSR)

Server-side rendering is implemented using Next.js `getServerSideProps` for the product and the product detail page.

## React Query

Data fetching is managed with the `react-query` library, providing a seamless experience for both server-side and client-side rendering.

## Conclusion

Thank you for your time

Happy Coding ;)
