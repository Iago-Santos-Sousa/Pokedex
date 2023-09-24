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
}) => {
  const [dataPokemon, setDataPokemon] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    setErrorMessage(false);
    setLoadSpinner(true);

    e.preventDefault();

    if (!dataPokemon) return;

    (async () => {
      const { response, data, errorResponse } = await fetchPokemon(
        dataPokemon.toLowerCase(),
      );

      if (!errorResponse) {
        setErrorMessage(false);
        setResult(data);
        setDataPokemon("");
        setPokemonDataList([]);
        setPokemonDataType([]);
        setSelectedType("");
        setLoadSpinner(false);
      } else {
        setDataPokemon(data);
        setResult(null);
        console.log(response);
        setErrorMessage(true);
        setLoadSpinner(false);
      }
    })();
  };

  // console.log(`result: ${result}`);
  // console.log(`errorMessage: ${errorMessage}`);

  return (
    <div className="form-input-search">
      <form onSubmit={handleSubmit}>
        <SearchBarAutoComplete
          value={dataPokemon}
          setDataPokemon={setDataPokemon}
          pokemonNamesArr={pokemonNamesArr}
        />
      </form>

      {loadSpinner && <LoadSpinner />}

      {errorMessage && !result ? (
        <div className="container-only-pokemon">
          <ErrorMessage />
        </div>
      ) : result && !errorMessage ? (
        <div className="container-only-pokemon">
          <PokemonCard elem={result} />
        </div>
      ) : null}
    </div>
  );
};

export default FormPokemon;
