import { Pokemon } from "@/types/Pokemon";
import Image from "next/image";
import React from "react";

interface RegularResultsProps {
  pokemon: Pokemon;
}

const RegularResults = ({ pokemon }: RegularResultsProps) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="bg-gradient-to-br from-purple-100 to-purple-300 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={150}
            height={150}
            className="rounded-lg shadow-md"
          />
          <h2 className="text-2xl font-bold capitalize text-gray-800">
            {pokemon.name}
          </h2>
          <p className="text-gray-700 text-lg">
            <span className="font-medium text-gray-900">Abilities:</span>{" "}
            {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegularResults;
