import { useEffect, useState, useRef } from "react";
import { fetchPokemonByType } from "../api/fetchPokemonByType";
import PokemonCard from "../PokemonCard/PokemonCard";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

const PokemonPerType = ({
  pokemonDataType,
  setPokemonDataType,
  error,
  setError,
  page,
  setPage,
  setOptionRnder,
  optionRender,
  pokemonPerPage,
  pokemonLength,
  setPokemonLength,
  selectedType,
}) => {
  const selectedTypeRef = useRef(selectedType);

  // console.log(selectedType);

  useEffect(() => {
    if (!selectedType) return;
    // setOptionRnder(true);
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

  if (pokemonDataType.length <= 0) return;

  return (
    <div className="pokemon-type">
      <ul>
        {pokemonDataType.map((elem, index) => (
          <div className="container" key={index}>
            <PokemonCard elem={elem} />
          </div>
        ))}
      </ul>
      {pokemonDataType.length > 0 && (
        <LoadMoreButton
          page={page}
          setPage={setPage}
          pokemonData={pokemonDataType}
          pokemonLength={pokemonLength}
        />
      )}
    </div>
  );
};

export default PokemonPerType;
