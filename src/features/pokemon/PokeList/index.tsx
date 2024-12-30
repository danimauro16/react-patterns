import React, { ReactNode } from "react";
import ClassicItem from "./PokeClassicItem";
import DeluxeItem from "./PokeDeluxeItem";
import PremiumItem from "./PokePremiumItem";

interface PokeListProps {
  children: ({
    showDetails,
  }: {
    showDetails: boolean;
  }) => ReactNode | ReactNode[];
}

const PokeList = ({ children }: PokeListProps) => {
  const showDetails = true;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children({ showDetails })}
    </ul>
  );
};

export default Object.assign(PokeList, {
  DeluxeItem,
  PremiumItem,
  ClassicItem,
});
