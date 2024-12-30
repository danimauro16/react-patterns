import React, { useState } from "react";

interface SpecialInputProps {
  handleSearch: (query: string) => Promise<void>;
}
export const SpecialInput = ({ handleSearch }: SpecialInputProps) => {
  const [query, setQuery] = useState("");

  const onSearch = () => {
    handleSearch(query);
  };

  return (
    <div className="flex w-full gap-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search for a Pokémon..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium text-gray-700 bg-gray-100 transition-all duration-200 hover:shadow-lg"
        />
      </div>
      <button
        onClick={onSearch}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-4 rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-transform duration-200 transform hover:scale-105"
      >
        Search Pokemon
      </button>
    </div>
  );
};
