import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonList = async (page) => {
  const offset = 9 * (page - 1);
  console.log(offset);
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  const response = await fetch(URL);
  const data = await response.json();

  const promises = data.results.map(
    async (pokemon) => (await fetchPokemon(pokemon.name)).data,
  );

  const pokemonList = Promise.all(promises);

  return pokemonList;
};
