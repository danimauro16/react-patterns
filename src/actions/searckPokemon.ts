import { Pokemon } from "@/types/Pokemon";

export const searchPokemon = async (name: string): Promise<Pokemon> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  const pokemon = await response.json();
  return pokemon;
};
