import { fetchPokemon } from "../api/fetchPokemon";
import { useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBarAutoComplete from "../SearchBarAutoComplete/SearchBarAutoComplete";
import { pokemonNamesArr } from "../../utils/pokemonNamesArr";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

const FormPokemon = ({
  loadSpinner,
  setLoadSpinner,
  errorMessage,
  setErrorMessage,
  setOptionRnder,
  optionRender,
  setPokemonDataList,
  setPokemonDataType,
  setSelectedType,
  setFormPokemonResult,
}) => {
  const [dataPokemon, setDataPokemon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dataPokemon) return;
    setErrorMessage(false);
    setLoadSpinner(true);

    (async () => {
      const { response, data, errorResponse } = await fetchPokemon(
        dataPokemon.toLowerCase(),
      );

      if (!errorResponse) {
        setErrorMessage(false);
        setDataPokemon("");
        setOptionRnder(true);
        setPokemonDataList((prev) => {
          return prev.filter((elem) => elem !== elem);
        });
        setPokemonDataType([]);
        setSelectedType("");
        setLoadSpinner(false);
        setFormPokemonResult(data);
        console.log("executou sem erro");
      } else {
        setErrorMessage(true);
        setFormPokemonResult(null);
        setDataPokemon("");
        setPokemonDataList((prev) => {
          return prev.filter((elem) => elem !== elem);
        });
        setPokemonDataType([]);
        setOptionRnder(true);
        setLoadSpinner(false);
      }
    })();
  };

  return (
    <div className="form-input-search">
      <form onSubmit={handleSubmit}>
        <SearchBarAutoComplete
          value={dataPokemon}
          setDataPokemon={setDataPokemon}
          pokemonNamesArr={pokemonNamesArr}
        />
      </form>
      {/* {loadSpinner && <LoadSpinner />} */}

      {/* {errorMessage && !dataPokemon ? (
        <div className="container-only-pokemon">
          <ErrorMessage />
        </div>
      ) : result && !errorMessage ? (
        <div className="container-only-pokemon">
          <PokemonCard elem={result} />
        </div>
      ) : null} */}
    </div>
  );
};

export default FormPokemon;
