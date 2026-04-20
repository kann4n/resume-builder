# Resume Builder

A full-stack resume builder for creating, previewing, and exporting professional resumes. The project includes a Vite + React frontend with editable resume templates and an Express + MongoDB backend for user authentication and template management.

## Features

- Build a resume with live preview updates.
- Choose from Modern, Classic, Compact, and Sidebar layouts.
- Save resume drafts in browser local storage.
- Export resumes as PDF using the browser print flow.
- Register and log in users with JWT authentication.
- Create, read, update, and delete resume templates through the API.

## Tech Stack

**Frontend**

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS

**Backend**

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- bcrypt password hashing

## Project Structure

```text
resume-builder/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── index.js
└── frontend/
    ├── public/
    └── src/
        ├── components/
        ├── pages/
        ├── App.tsx
        └── main.tsx
```

## Prerequisites

- Node.js 18 or newer
- npm
- MongoDB running locally or a MongoDB connection string

## Getting Started

Install dependencies for both apps:

```bash
cd backend
npm install

cd ../frontend
npm install
```

Create a backend environment file:

```bash
cd ../backend
touch .env
```

Add the following values to `backend/.env`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/resume-builder
JWT_SECRET=replace-with-a-secure-secret
```

Start the backend API:

```bash
cd backend
npm run dev
```

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

The backend runs at `http://localhost:3000` by default. Vite will print the frontend URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

### Backend

```bash
npm run dev
```

Starts the Express server with Nodemon.

```bash
npm start
```

Starts the Express server with Node.

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the production frontend.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run preview
```

Previews the production build locally.

## API Overview

### Users

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/users/register` | Register a new user. |
| `POST` | `/api/users/login` | Log in and receive a JWT. |

### Templates

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/api/templates` | No | Get all templates. |
| `GET` | `/api/templates/:id` | No | Get one template by ID. |
| `POST` | `/api/templates/create` | Yes | Create a template. |
| `PUT` | `/api/templates/:id` | Yes | Update a template owned by the authenticated user. |
| `DELETE` | `/api/templates/:id` | Yes | Delete a template owned by the authenticated user. |

Protected template routes expect an authorization header:

```http
Authorization: Bearer <token>
```

## Notes

- The resume builder currently stores draft resume data in the browser under the `kesume-resume-draft` local storage key.
- PDF export uses `window.print()`, so final output depends on the browser print settings.
- If `MONGO_URI` is not set, the backend falls back to `mongodb://localhost:27017/resume-builder`.

