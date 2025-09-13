import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from './pokemon.types';

const baseUrl = import.meta.env.VITE_POKEAPI_BASE_URL || 'https://pokeapi.co/api/v2/';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});
export const { useGetPokemonByNameQuery } = pokemonApi;
