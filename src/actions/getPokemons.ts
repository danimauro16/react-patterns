import { Pokemon } from "@/types/Pokemon";

export const getPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await response.json();
  return data.results;
};
