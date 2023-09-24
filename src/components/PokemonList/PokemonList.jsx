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
  option,
  pokemonLength,
}) => {
  const loadMorePokemon = () => {
    // Função para carregar mais Pokémon
    setPage(page + 1);
  };

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
    <div className="pokemon-list">
      {pokemonDataList.map((elem, index) => (
        <div className="container" key={index}>
          <PokemonCard elem={elem} />
        </div>
      ))}
      <button
        onClick={loadMorePokemon} // Lidar com o carregamento de mais Pokémon
        disabled={pokemonDataList.length === pokemonLength}
        className="carregar-mais"
      >
        Carregar mais
      </button>
    </div>
  );
};

export default PokemonList;
