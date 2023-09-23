import { useEffect, useState } from "react";
import { fetchPokemonByType } from "./api/fetchPokemonByType";

const PokemonPerType = ({
  pokemonDataType,
  setPokemonDataType,
  error,
  setError,
  page,
  setPage,
  setOption,
  pokemonsPerPage,
  pokemonLength,
  setPokemonLength,
  selectedType,
  setSelectedType,
}) => {
  console.log(selectedType);

  useEffect(() => {
    if (!selectedType) return;
    // fetchPokemonByType
    async function fetchDataByType() {
      setOption(true);
      // const type = "electric";
      const startIndex = (page - 1) * pokemonsPerPage;
      const { dataLength, pokemonList } = await fetchPokemonByType(
        selectedType,
        startIndex,
        pokemonsPerPage,
      );
      // console.log(pokemonList);
      if (pokemonList.length > 0) {
        setPokemonDataType((prev) => [...prev, ...pokemonList]);
        setPokemonLength(dataLength);
        setError(false);
      } else {
        setPokemonDataType([]);
        setError(true);
      }
    }
    fetchDataByType();
  }, [page, selectedType]);

  return (
    <>
      <ul>
        {pokemonDataType.map((elem, index) => (
          <li key={index}>{elem.name}</li>
        ))}
      </ul>
      <button
        onClick={() => setPage(page + 1)}
        disabled={pokemonDataType.length === pokemonLength}
      >
        Load more
      </button>
    </>
  );
};

export default PokemonPerType;
