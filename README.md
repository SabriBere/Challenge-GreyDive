# Challenge GreyDive 🧭

This is a recovered legacy challenge repository. The frontend was originally built with Create React App and has been migrated to Vite as part of the recovery work, mainly to remove the deprecated `react-scripts` dependency and clean up security warnings from its transitive dependency tree.

The project is still being modernized incrementally. It now includes a Vite frontend and a TypeScript backend API.

## Index 📚

- [Frontend](#frontend)
- [Migration Notes](#migration-notes)
- [Routing](#routing)
- [API Expectations](#api-expectations)
- [Backend](#backend)
- [Current Status](#current-status)

<a id="frontend"></a>
## Frontend ⚛️

The frontend lives in `front/` and is a React application powered by Vite.

### Stack 🧱

- React 18
- Vite
- Chakra UI
- React Router
- Axios

### Running Locally 🚀

From the repository root:

```bash
cd front
npm install
npm run dev
```

The app runs at:

```txt
http://localhost:3000
```

### Build 🏗️

```bash
cd front
npm run build
```

### Preview Production Build 👀

```bash
cd front
npm run preview
```

<a id="migration-notes"></a>
## Migration Notes 🛠️

This frontend used to depend on Create React App through `react-scripts`. It was migrated to Vite to make the project easier to maintain and to remove deprecated tooling.

Relevant changes made during the migration:

- Removed `react-scripts`.
- Added `vite` and `@vitejs/plugin-react`.
- Moved the app entry HTML to `front/index.html`.
- Added `front/vite.config.js`.
- Kept the development server on port `3000`.
- Added a Vite proxy for backend API calls to `http://localhost:8080`.
- Replaced the old CRA runtime assumptions with Vite-compatible setup.

<a id="routing"></a>
## Routing 🧭

The frontend currently exposes:

```txt
/
/test/:id
```

Invalid routes render a not found state.

<a id="api-expectations"></a>
## API Expectations 🔌

The frontend expects a backend running locally at:

```txt
http://localhost:8080
```

During development, Vite proxies frontend requests from `/api` to that backend.

The main endpoint currently used by the frontend is:

```txt
GET /api/clientes
GET /api/clientes/:id
```

<a id="backend"></a>
## Backend 🛠️

The backend lives in `back/` and exposes the API consumed by the frontend.

### Stack 🧱

- Node.js
- Express
- TypeScript
- Prisma
- SQLite
- dotenvx

### Environment Variables 🔐

Create a local `.env` file inside `back/` using `.env.example` as a guide:

```bash
cd back
cp .env.example .env
```

For local development, a typical `.env` looks like:

```env
DATABASE_URL=file:./prisma.sqlite
PORT=8080
NODE_ENV=development
```

The SQLite database file is local-only and ignored by Git.

### Install Dependencies 📦

```bash
cd back
npm install
```

### First-Time Setup ⚙️

When running the project for the first time, create and populate the local SQLite database before starting the API:

```bash
cd back
npm run db:push
npm run seed
npm run dev
```

What each command does:

```txt
npm run db:push  -> Creates/synchronizes the SQLite schema from Prisma.
npm run seed     -> Inserts the mock test data into the database.
npm run dev      -> Starts the API server.
```

If `db:push` or `seed` are skipped, requests such as:

```txt
GET /api/clientes
GET /api/clientes/:id
```

may fail because the required tables or mock data do not exist yet.

### Seed Mock Data 🌱

The backend uses mock test data from `back/mocks/test.ts`.

Before seeding a fresh SQLite database, sync the Prisma schema:

```bash
cd back
npm run db:push
```

```bash
cd back
npm run seed
```

This inserts the mock tests into the local SQLite database.

### Running Locally 🚀

```bash
cd back
npm run dev
```

The API runs at:

```txt
http://localhost:8080
```

The dev command uses `dotenvx` to load `.env` and Node watch mode with `ts-node/register`.

### Running the Full Application 🚀

Start the backend first:

```bash
cd back
npm run dev
```

Then start the frontend in a separate terminal:

```bash
cd front
npm run dev
```

Frontend:

```txt
http://localhost:3000
```

Backend:

```txt
http://localhost:8080
```

### Prisma 🗄️

The Prisma schema lives in:

```txt
back/prisma/schema.prisma
```

The current model is `Cliente`. Its `id` is an auto-incrementing number, so seeded records can be fetched with numeric IDs like `/api/clientes/1`.

### Build 🏗️

```bash
cd back
npm run build
```

### Start Production Build ▶️

```bash
cd back
npm start
```

### Backend Scripts 🧪

```bash
npm run dev
npm run build
npm start
npm run seed
npm run db:push
npm run generate
npm run lint
npm run format:check
```

### API Endpoints 🔌

```txt
GET /api/clientes
GET /api/clientes/:id
```

Example:

```bash
curl http://localhost:8080/api/clientes/1
```

<a id="current-status"></a>
## Current Status 🌱

This repository is being restored in small steps. Some legacy pieces may still exist and are being reviewed before removal or refactor.

Known frontend cleanup already started:

- Vite migration.
- Folder reorganization.
- 404 state.
- Empty states for missing test data.
- Removal of unused route imports and components.

Known backend cleanup already started:

- Migrated API to TypeScript.
- Switched persistence from PostgreSQL to SQLite.
- Replaced Sequelize with Prisma.
- Added mock-based seed data.
- Added dotenvx-based environment loading.
