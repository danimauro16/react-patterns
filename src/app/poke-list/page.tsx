import { getPokemons } from "@/actions/getPokemons";
import PokeList from "@/features/pokemon/PokeList";

export default async function PokeListPage() {
  const pokemons = await getPokemons();

  return (
    <>
      <div className="p-10">
        <PokeList>
          {({ showDetails }) =>
            pokemons.map((pokemon) => (
              <PokeList.DeluxeItem
                key={pokemon.name}
                pokemon={pokemon}
                showDetails={showDetails}
              />
            ))
          }
        </PokeList>
      </div>
    </>
  );
}
