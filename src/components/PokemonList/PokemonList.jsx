import { useEffect, useState } from "react";
import { fetchPokemonList } from "../api/fetchPokemonList";
import PokemonCard from "../PokemonCard/PokemonCard";

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
      {pokemonDataList.map((elem, index) => (
        <div className="container" key={index}>
          <PokemonCard elem={elem} />
        </div>
      ))}
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
