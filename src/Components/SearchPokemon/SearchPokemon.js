import React from "react";
import PropTypes from "prop-types";

export const SearchPokemon = ({ onSearch, value }) => {
  const onFilterPokemonsByName = (e) => onSearch(e.currentTarget.value);

  return (
    <nav>
      Search Pokemons
      <input onChange={onFilterPokemonsByName} value={value} />
    </nav>
  );
};

SearchPokemon.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
