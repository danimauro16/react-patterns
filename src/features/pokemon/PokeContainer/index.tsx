"use client";

import { searchPokemon } from "@/actions/searckPokemon";
import { Pokemon } from "@/types/Pokemon";
import { useState } from "react";
import PokeSearch from "../PokeSearch";

export const PokeContainer = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const handleSearch = async (query: string) => {
    const response = await searchPokemon(query);
    setPokemon(response);
  };

  return (
    <PokeSearch handleSearch={handleSearch}>
      {!pokemon && (
        <div className="mt-8 flex flex-col items-center">
          <p className="text-gray-700 text-lg">Search for a Pokemon by name</p>
        </div>
      )}
      {pokemon && <PokeSearch.ExclusiveResults pokemon={pokemon} />}
    </PokeSearch>
  );
};
