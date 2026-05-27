# Challenge GreyDive 🧭

This is a recovered legacy challenge repository. The frontend was originally built with Create React App and has been migrated to Vite as part of the recovery work, mainly to remove the deprecated `react-scripts` dependency and clean up security warnings from its transitive dependency tree.

The project is still being modernized incrementally. It now includes a Vite frontend and a TypeScript backend API.

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

## Routing 🧭

The frontend currently exposes:

```txt
/
/test/:id
```

Invalid routes render a not found state.

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

## Backend 🛠️

The backend lives in `back/` and exposes the API consumed by the frontend.

### Stack 🧱

- Node.js
- Express
- TypeScript
- Sequelize
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
SQLITE_STORAGE=database.sqlite
PORT=8080
NODE_ENV=development
```

The SQLite database file is local-only and ignored by Git.

### Install Dependencies 📦

```bash
cd back
npm install
```

### Seed Mock Data 🌱

The backend uses mock test data from `back/mocks/test.ts`.

```bash
cd back
npm run seed
```

This creates/syncs the local SQLite database and inserts the mock tests.

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
npm run lint
npm run format:check
```

### API Endpoints 🔌

```txt
GET /api/clientes
GET /api/clientes/:id
```

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
- Added mock-based seed data.
- Added dotenvx-based environment loading.
