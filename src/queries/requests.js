const Pokedex = require("pokedex-promise-v2");

const PokeAPI = new Pokedex();

export const fetchPokemonBriefs = async ({ queryKey }) => {
  const search = queryKey[1];

  const { count: numberOfPokemons } = await PokeAPI.getPokemonsList({
    limit: 1,
    offset: 0,
  });
  const interval = {
    limit: numberOfPokemons,
    offset: 0,
  };
  const { results } = await PokeAPI.getPokemonsList(interval);
  const pokemonDataList = results.map((e, i) => ({ name: e.name, id: i + 1 }));

  if (search) {
    return [
      ...pokemonDataList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      ),
    ];
  }
  return pokemonDataList;
};
