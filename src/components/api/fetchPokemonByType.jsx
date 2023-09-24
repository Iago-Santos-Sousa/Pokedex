import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonByType = async (
  type,
  startIndex = 0,
  pokemonAmount = 9,
) => {
  const URL = `https://pokeapi.co/api/v2/type/${type}`;

  const response = await fetch(URL);
  const data = await response.json();
  let dataLength = data.pokemon ? data.pokemon.length : 0;
  // console.log(dataLength);

  const startIndexClamped = Math.max(0, startIndex); // Garante que startIndex seja no mínimo 0

  const promises = data.pokemon
    .slice(startIndexClamped, startIndexClamped + pokemonAmount)
    .map(async (item) => (await fetchPokemon(item.pokemon.name)).data);

  const pokemonList = Promise.all(promises);

  return { pokemonList: await pokemonList, dataLength };
};
