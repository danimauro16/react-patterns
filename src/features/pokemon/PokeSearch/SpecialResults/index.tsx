import { Pokemon } from "@/types/Pokemon";
import Image from "next/image";
import React from "react";

const SpecialResults = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="bg-gradient-to-br from-purple-100 to-purple-300 p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <div className="flex flex-col items-center gap-6">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={150}
            height={150}
            className="rounded-lg shadow-lg"
          />
          <h2 className="text-3xl font-extrabold capitalize text-gray-900">
            {pokemon.name}
          </h2>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-gray-900">Abilities:</span>{" "}
            {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <Image
                src={pokemon.sprites.back_default}
                alt={`${pokemon.name} back view`}
                width={100}
                height={100}
                className="rounded-md shadow-md"
              />
              <p className="text-sm text-gray-700">Back View</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={pokemon.sprites.front_shiny}
                alt={`${pokemon.name} shiny front view`}
                width={100}
                height={100}
                className="rounded-md shadow-md"
              />
              <p className="text-sm text-gray-700">Shiny Front</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={pokemon.sprites.back_shiny}
                alt={`${pokemon.name} shiny back view`}
                width={100}
                height={100}
                className="rounded-md shadow-md"
              />
              <p className="text-sm text-gray-700">Shiny Back</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name} official artwork`}
                width={120}
                height={120}
                className="rounded-md shadow-md"
              />
              <p className="text-sm text-gray-700">Official Artwork</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-800 text-lg">
              <span className="font-semibold text-gray-900">Height:</span>{" "}
              {pokemon.height / 10} m
            </p>
            <p className="text-gray-800 text-lg">
              <span className="font-semibold text-gray-900">Weight:</span>{" "}
              {pokemon.weight / 10} kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialResults;
