import { useEffect, useState } from "react";
import { fetchPokemonList } from "./api/fetchPokemonList";

const PokemonList = ({
  pokemonDataList,
  setPokemonDataList,
  error,
  setError,
  page,
  setPage,
  setOption,
}) => {
  useEffect(() => {
    async function fetchDataList() {
      const pokemonList = await fetchPokemonList(page);
      if (pokemonList.length > 0) {
        setPokemonDataList((prev) => [...prev, ...pokemonList]);
        setError(false);
      } else {
        setPokemonDataList([]);
        setError(true);
      }
    }
    fetchDataList();
  }, [page]);

  return (
    <>
      <ul>
        {pokemonDataList.map((elem, index) => (
          <li key={index}>{elem.name}</li>
        ))}
      </ul>
      <button
        onClick={() => setPage(page + 1)}
        disabled={pokemonDataList.length === 100}
      >
        Load more
      </button>
    </>
  );
};

export default PokemonList;
