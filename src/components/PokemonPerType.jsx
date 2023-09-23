import { useEffect, useState, useRef } from "react";
import { fetchPokemonByType } from "./api/fetchPokemonByType";

const PokemonPerType = ({
  pokemonDataType,
  setPokemonDataType,
  error,
  setError,
  page,
  setPage,
  setOption,
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

  console.log(selectedType);

  useEffect(() => {
    if (!selectedType) return;
    async function fetchDataByType() {
      setOption(true);
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
    <>
      <ul>
        {pokemonDataType.map((elem, index) => (
          <li key={index}>{elem.name}</li>
        ))}
      </ul>
      <button
        onClick={loadMorePokemon} // Lidar com o carregamento de mais Pokémon
        disabled={pokemonDataType.length === pokemonLength}
        className="carregar-mais"
      >
        Carregar mais
      </button>
    </>
  );
};

export default PokemonPerType;
