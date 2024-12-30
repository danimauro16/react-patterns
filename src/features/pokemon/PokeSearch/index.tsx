"use client";

import React from "react";
import InputSearch from "./InputSearch";
import RegularResults from "./RegularResults";
import ExclusiveResults from "./ExclusiveResults";
import SpecialResults from "./SpecialResults";

interface SearchInfoProps {
  children: React.ReactNode | React.ReactNode[];
  handleSearch: (query: string) => Promise<void>;
}

const PokeSearch = ({ children, handleSearch }: SearchInfoProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full">
        <InputSearch>
          <InputSearch.SpecialInput handleSearch={handleSearch} />
        </InputSearch>

        {children}
      </div>
    </div>
  );
};

export default Object.assign(PokeSearch, {
  RegularResults,
  ExclusiveResults,
  SpecialResults,
});
