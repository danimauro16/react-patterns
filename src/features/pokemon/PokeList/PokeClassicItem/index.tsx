import { Pokemon } from "@/types/Pokemon";

interface ClassicItemProps {
  pokemon: Pokemon;
  showDetails: boolean;
}
const ClassicItem = ({ pokemon, showDetails }: ClassicItemProps) => {
  return (
    <li className="bg-gray-800 text-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 transform hover:translate-y-1">
      <h2 className="text-xl font-semibold capitalize text-white mb-2">
        {pokemon.name}
      </h2>
      {showDetails && (
        <a
          href={""}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 underline hover:text-blue-600 transition"
        >
          View Details
        </a>
      )}
    </li>
  );
};

export default ClassicItem;
