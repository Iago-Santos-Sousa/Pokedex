import { useEffect, useState } from "react";
import { fetchPokemonList } from "../api/fetchPokemonList";
import PokemonCard from "../PokemonCard/PokemonCard";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

const PokemonList = ({
  pokemonDataList,
  setPokemonDataList,
  error,
  setError,
  page,
  setPage,
  setOptionRnder,
  optionRender,
  pokemonLength,
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

  if (pokemonDataList.length <= 0) return;
  return (
    <div className="pokemon-list">
      {pokemonDataList.map((elem, index) => (
        <div className="container" key={index}>
          <PokemonCard elem={elem} />
        </div>
      ))}
      {pokemonDataList.length > 0 && (
        <LoadMoreButton
          page={page}
          setPage={setPage}
          pokemonData={pokemonDataList}
          pokemonLength={pokemonLength}
        />
      )}
    </div>
  );
};

export default PokemonList;
