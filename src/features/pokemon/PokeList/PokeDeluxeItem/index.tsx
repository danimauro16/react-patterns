import { Pokemon } from "@/types/Pokemon";

interface DeluxeItemProps {
  pokemon: Pokemon;
  showDetails: boolean;
}

export const DeluxeItem = ({ pokemon, showDetails }: DeluxeItemProps) => {
  return (
    <li className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 transform hover:scale-105">
      <h2 className="text-xl font-bold capitalize text-white mb-2">
        {pokemon.name}
      </h2>
      {showDetails && (
        <a
          href={""}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-100 bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition"
        >
          View Details
        </a>
      )}
    </li>
  );
};

export default DeluxeItem;
