import { useEffect, useState } from "react";
import { fetchPokemonList } from "../api/fetchPokemonList";
import PokemonCard from "../PokemonCard/PokemonCard";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import { usePokemons } from "../../context/PokemonContext";

const PokemonList = () => {
  const {
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
  } = usePokemons();
  useEffect(() => {
    setIsLoading(true); // Defina isLoading como true no início da busca.
    if (pokemonDataList.length <= 0) {
      setLoadSpinner(true);
    }

    (async () => {
      const pokemonList = await fetchPokemonList(page);
      if (pokemonList.length > 0) {
        setPokemonDataList((prev) => [...prev, ...pokemonList]);
        setLoadSpinner(false);
      } else {
        setPokemonDataList([]);
        setLoadSpinner(false);
      }
      setIsLoading(false); // Defina isLoading como false após a busca ser concluída.
      setLoadSpinner(false);
    })();
  }, [page]);

  // if (pokemonDataList.length <= 0) return;
  return (
    <>
      {pokemonDataList.map((elem, index, arr) => (
        <div className="container-card" key={index}>
          <PokemonCard elem={elem} index={index} arr={arr} />
        </div>
      ))}
    </>
  );
};

export default PokemonList;
