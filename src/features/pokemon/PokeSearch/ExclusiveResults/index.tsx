import { Pokemon } from "@/types/Pokemon";
import Image from "next/image";

const ExclusiveResults = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="bg-white border border-gray-200 rounded-3xl shadow-xl w-full max-w-xl p-8">
        <div className="flex flex-col items-center gap-8">
          <Image
            src={pokemon.sprites.other!["official-artwork"].front_default}
            alt={pokemon.name}
            width={200}
            height={200}
            className="rounded-full shadow-lg border-4 border-indigo-500"
          />
          <h2 className="text-4xl font-bold capitalize text-gray-800 tracking-wide">
            {pokemon.name}
          </h2>
          <div className="grid grid-cols-2 gap-4 w-full text-center">
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg p-4 shadow">
              <h3 className="text-lg font-semibold text-indigo-900">Height</h3>
              <p className="text-gray-800 text-2xl">{pokemon.height / 10} m</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg p-4 shadow">
              <h3 className="text-lg font-semibold text-indigo-900">Weight</h3>
              <p className="text-gray-800 text-2xl">{pokemon.weight / 10} kg</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg p-4 shadow">
              <h3 className="text-lg font-semibold text-indigo-900">Base XP</h3>
              <p className="text-gray-800 text-2xl">
                {pokemon.base_experience}
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg p-4 shadow">
              <h3 className="text-lg font-semibold text-indigo-900">Types</h3>
              <p className="text-gray-800 text-xl">
                {pokemon.types.map((t) => t.type.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Abilities
            </h3>
            <ul className="flex flex-wrap gap-2 justify-center">
              {pokemon.abilities.map((a) => (
                <li
                  key={a.ability.name}
                  className="bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 text-sm shadow"
                >
                  {a.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Additional Views
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={`${pokemon.name} front`}
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600">Front View</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={pokemon.sprites.back_default}
                  alt={`${pokemon.name} back`}
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600">Back View</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={`${pokemon.name} shiny front`}
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600">Shiny Front</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={`${pokemon.name} shiny back`}
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600">Shiny Back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveResults;