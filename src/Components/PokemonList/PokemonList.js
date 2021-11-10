import React, { useState } from "react";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "../../queries/queryKeys";
import { fetchPokemonBriefs } from "../../queries/requests";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";

export const PokemonList = () => {
  const [search, setSearch] = useState("");
  const {
    data: pokemons,
    error,
    isError,
    isLoading,
  } = useQuery([QUERY_KEYS.POKEMON_BRIEFS, search], fetchPokemonBriefs);
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="columns  is-flex-wrap-wrap is-mobile is-half-desktop ">
      <SearchPokemon onSearch={setSearch} value={search} />
      {pokemons?.map((pokemon) => (
        <p key={pokemon.id}>
          Name:{pokemon.name} ID {pokemon.id}
        </p>
      ))}
    </div>
  );
};
