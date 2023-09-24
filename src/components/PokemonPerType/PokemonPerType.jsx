import { useEffect, useState, useRef } from "react";
import { fetchPokemonByType } from "../api/fetchPokemonByType";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonPerType = ({
  pokemonDataType,
  setPokemonDataType,
  error,
  setError,
  page,
  setPage,
  setOption,
  option,
  pokemonPerPage,
  pokemonLength,
  setPokemonLength,
  selectedType,
}) => {
  const selectedTypeRef = useRef(selectedType);

  const loadMorePokemon = () => {
    // Função para carregar mais Pokémon
    setPage(page + 1);
  };

  // console.log(selectedType);

  useEffect(() => {
    if (!selectedType) return;
    // setOption(true);
    async function fetchDataByType() {
      const startIndex = (page - 1) * pokemonPerPage;
      const { dataLength, pokemonList } = await fetchPokemonByType(
        selectedType,
        startIndex,
        pokemonPerPage,
      );

      if (selectedType !== selectedTypeRef.current) {
        // Verifique se o tipo selecionado mudou e limpe a lista
        setPokemonDataType(pokemonList);
        selectedTypeRef.current = selectedType;
      } else {
        setPokemonDataType((prev) => [...prev, ...pokemonList]);
      }

      setPokemonLength(dataLength);
      setError(false);
    }
    fetchDataByType();
  }, [page, selectedType]);

  return (
    <div className="pokemon-type">
      <ul>
        {pokemonDataType.map((elem, index) => (
          <div className="container" key={index}>
            <PokemonCard elem={elem} />
          </div>
        ))}
      </ul>
      <button
        onClick={loadMorePokemon} // Lidar com o carregamento de mais Pokémon
        disabled={pokemonDataType.length === pokemonLength}
        className="carregar-mais"
      >
        Carregar mais
      </button>
    </div>
  );
};

export default PokemonPerType;
