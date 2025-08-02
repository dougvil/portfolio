import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/pokemon/pokemon';
import authReducer from './slices/auth/auth.slice';

export default configureStore({
  reducer: {
    auth: authReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});
