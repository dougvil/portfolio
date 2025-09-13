<h1 align="center">Vite + React + TypeScript + Redux Toolkit (RTK Query) Boilerplate</h1>

A modern front-end boilerplate powered by Vite, React 19, TypeScript, Redux Toolkit and RTK Query for data fetching, plus MUI (Material UI) + Emotion for UI.

---

## :rocket: Main Stack

- **Vite**
- **React 19**
- **TypeScript**
- **Redux Toolkit** (Store + Slices)
- **RTK Query** (API layer & caching)
- **MUI (Material UI)** + **Emotion**

---

## :wrench: Scripts

```bash
# Development (Vite dev server)
npm run dev

# Production build (TypeScript + Vite)
npm run build

# ESLint
npm run lint

# Preview built app
npm run preview
```

---

## :gear: Folder Structure

```
.
├─ index.html
├─ .env.example
├─ src/
│  ├─ main.tsx          # React entry
│  ├─ App.tsx           # Root component
│  ├─ providers/        # Global providers (store, theme, etc.)
│  │   ├─ StoreProvider.tsx
│  │   └─ ThemeProvider.tsx
│  ├─ store/
│  │   ├─ store.ts      # Configure store
│  │   ├─ store.hooks.ts
│  │   └─ slices/       # Feature slices
│  ├─ services/
│  │   └─ pokemon/      # Example RTK Query service
│  │       └─ pokemon.ts
│  └─ assets/ (optional)
└─ ...
```

---

## :link: Environment Variables

All variables exposed to the client must start with `VITE_`.

| Name                    | Default                      | Description                                      |
| ----------------------- | ---------------------------- | ------------------------------------------------ |
| `VITE_POKEAPI_BASE_URL` | `https://pokeapi.co/api/v2/` | Base URL used by the example pokemonApi service. |

Create your own file:

```bash
cp .env.example .env
```

---

## :zap: Example: Using RTK Query

The example service lives at:

```
src/services/pokemon/pokemon.ts
```

It defines an API slice with `createApi`, a `fetchBaseQuery`, and endpoints which auto-generate hooks.

Example usage (conceptual):

```tsx
import { useGetPokemonByNameQuery } from '@/services/pokemon/pokemon';

export function Demo() {
  const { data, isLoading, isError } = useGetPokemonByNameQuery('pikachu');
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error</span>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## :hammer: How to Add a New API Service (RTK Query)

1. Create a folder: `src/services/<domain>/`
2. Define the API slice:

   ```ts
   // src/services/user/user.ts
   import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

   export const userApi = createApi({
     reducerPath: 'userApi',
     baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
     endpoints: (builder) => ({
       getUser: builder.query<{ id: string; name: string }, string>({
         query: (id) => `users/${id}`,
       }),
     }),
   });

   export const { useGetUserQuery } = userApi;
   ```

3. Add the reducer & middleware to `store.ts`:

   ```ts
   // ...existing code...
   import { userApi } from '@/services/user/user';
   // ...existing code...

   export const store = configureStore({
     reducer: {
       // ...existing reducers...
       [userApi.reducerPath]: userApi.reducer,
     },
     middleware: (getDefault) =>
       getDefault().concat(
         // ...existing middleware...
         userApi.middleware,
       ),
   });
   ```

4. Use the generated hook in a component:

   ```tsx
   const { data } = useGetUserQuery('123');
   ```

---

## :bulb: Notes

- Keep API logic inside `src/services`.
- Keep feature-specific state inside `src/store/slices`.
- All client-exposed env vars must be prefixed with `VITE_`.
- Prefer hooks from `store.hooks.ts` for typed `useDispatch` / `useSelector`.
- The example pokemon service is a reference—remove it when starting a real project.

---

## :memo: References

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [MUI](https://mui.com/)

---

## :handshake: Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/short-description`
3. Commit: `git commit -m "feat: add feature"`
4. Push: `git push origin feature/short-description`
5. Open a Pull Request

Please:

- Follow existing code style
- Keep the boilerplate lean (avoid unnecessary abstractions)
- Run `npm run lint` before submitting
- Update docs if behavior changes

---

## :trophy: Why Use This Boilerplate?

- Fast startup: Vite + optimized TS config
- Scalable state model (Redux Toolkit + RTK Query caching & invalidation)
- Clear separation (services / slices / providers)
- Ready for theming & UI with MUI
- Easy extension for real APIs

---

## :speech_balloon: Next Ideas (Optional)

- Add Jest + React Testing Library
- Add GitHub Actions (lint / test / build)
- Add deployment docs (Vercel / Netlify / Docker)

Enjoy and build fast. 🚀
