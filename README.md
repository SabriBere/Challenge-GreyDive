# Challenge GreyDive 🧭

This is a recovered legacy challenge repository. The frontend was originally built with Create React App and has been migrated to Vite as part of the recovery work, mainly to remove the deprecated `react-scripts` dependency and clean up security warnings from its transitive dependency tree.

The project is still being modernized incrementally. For now, this README focuses on the frontend.

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

## Current Status 🌱

This repository is being restored in small steps. Some legacy pieces may still exist and are being reviewed before removal or refactor.

Known frontend cleanup already started:

- Vite migration.
- Folder reorganization.
- 404 state.
- Empty states for missing test data.
- Removal of unused route imports and components.
