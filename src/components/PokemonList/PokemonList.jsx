import { useEffect, useState } from "react";
import { fetchPokemonList } from "../api/fetchPokemonList";
import PokemonCard from "../PokemonCard/PokemonCard";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

const PokemonList = ({
  pokemonDataList,
  setPokemonDataList,
  errorMessage,
  setErrorMessage,
  loadSpinner,
  setLoadSpinner,
  isLoading,
  setIsLoading,
  page,
  setPage,
  setOptionRnder,
  optionRender,
  pokemonLength,
}) => {
  useEffect(() => {
    setIsLoading(true); // Defina isLoading como true no início da busca.

    (async () => {
      const pokemonList = await fetchPokemonList(page);
      if (pokemonList.length > 0) {
        setPokemonDataList((prev) => [...prev, ...pokemonList]);
      } else {
        setPokemonDataList([]);
      }
      setIsLoading(false); // Defina isLoading como false após a busca ser concluída.
    })();
  }, [page]);

  // if (pokemonDataList.length <= 0) return;
  return (
    <>
      {pokemonDataList.map((elem, index) => (
        <div className="container-card" key={index}>
          <PokemonCard elem={elem} />
        </div>
      ))}

      {pokemonDataList.length > 0 && (
        <LoadMoreButton
          page={page}
          setPage={setPage}
          pokemonData={pokemonDataList}
          pokemonLength={pokemonLength}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default PokemonList;
