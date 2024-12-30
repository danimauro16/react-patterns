import { Pokemon } from "@/types/Pokemon";

interface PremiumItemProps {
  pokemon: Pokemon;
}
export const PremiumItem = ({ pokemon }: PremiumItemProps) => {
  return (
    <li className="bg-white border-2 border-yellow-500 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 transform hover:rotate-1">
      <h2 className="text-xl font-bold capitalize text-yellow-600 mb-2">
        {pokemon.name}
      </h2>

      <a
        href={""}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-yellow-600 border border-yellow-600 px-3 py-1 rounded-full hover:bg-yellow-500 hover:text-white transition"
      >
        View Details
      </a>
    </li>
  );
};

export default PremiumItem;
