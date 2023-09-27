import { useEffect, useState, useRef } from "react";
import { fetchPokemonByType } from "../api/fetchPokemonByType";
import PokemonCard from "../PokemonCard/PokemonCard";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import { usePokemons } from "../../context/PokemonContext";

const PokemonPerType = () => {
  const {
    pokemonDataType,
    setPokemonDataType,
    error,
    setErrorMessage,
    loadSpinner,
    setLoadSpinner,
    isLoading,
    setIsLoading,
    page,
    setPage,
    setOptionRnder,
    optionRender,
    pokemonPerPage,
    pokemonLength,
    setPokemonLength,
    selectedType,
  } = usePokemons();
  const selectedTypeRef = useRef(selectedType);

  useEffect(() => {
    if (!selectedType) return;
    if (page > 1) {
      setLoadSpinner(false);
    } else {
      setLoadSpinner(true);
    }

    setIsLoading(true); // Defina isLoading como true no início da busca.

    (async () => {
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
        setLoadSpinner(false);
      } else {
        setPokemonDataType((prev) => [...prev, ...pokemonList]);
        setLoadSpinner(false);
      }

      setPokemonLength(dataLength);
      setIsLoading(false); // Defina isLoading como false após a busca ser concluída.
    })();
  }, [page, selectedType]);

  console.log({ page });
  console.log({ pokemonDataType });
  console.log({ loadSpinner });

  // if (pokemonDataType.length <= 0) return;

  return (
    <>
      {pokemonDataType.map((elem, index) => (
        <div className="container-card" key={index}>
          {loadSpinner && <LoadSpinner />}
          <PokemonCard elem={elem} />
        </div>
      ))}
    </>
  );
};

export default PokemonPerType;
