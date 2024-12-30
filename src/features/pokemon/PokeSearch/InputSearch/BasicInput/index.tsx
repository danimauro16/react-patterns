import React, { useState } from 'react'

interface BasicInputProps {
  handleSearch: (query: string) => Promise<void>;
}
export const BasicInput = ({ handleSearch }: BasicInputProps) => {
  const [query, setQuery] = useState("");

  const onSearch = () => {
    handleSearch(query);
  }

  return (
    <div className="flex w-full gap-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search for a Pokémon..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg font-semibold text-gray-800"
        />
      </div>
      <button
        onClick={onSearch}
        className="bg-purple-500 text-gray-900 font-bold px-6 py-4 rounded-lg shadow hover:bg-purple-600 transition-all duration-200 transform hover:scale-105"
      >
        Search
      </button>
    </div>
  );
};
