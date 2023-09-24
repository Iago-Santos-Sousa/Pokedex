import { fetchPokemon } from "../api/fetchPokemon";
import { useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBarAutoComplete from "../SearchBarAutoComplete/SearchBarAutoComplete";
import { pokemonNamesArr } from "../../utils/pokemonNamesArr";

const FormPokemon = ({
  setOptionRnder,
  optionRender,
  setPokemonDataList,
  setPokemonDataType,
  setSelectedType,
}) => {
  const [dataPokemon, setDataPokemon] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dataPokemon) return;
    // setOptionRnder(true);
    async function fetchDataPokemon() {
      const { response, data, error } = await fetchPokemon(
        dataPokemon.toLocaleLowerCase(),
      );

      if (!error) {
        // setDataPokemon(data);
        setResult(data);
        setError(false);
        setDataPokemon("");
        setPokemonDataList([]);
        setPokemonDataType([]);
        setSelectedType("");

        // console.log(response);
      } else {
        setDataPokemon("");
        setError(true);
        console.log(response);
      }
    }
    fetchDataPokemon();
    // console.log("continue");
  };

  return (
    <div className="form-input-search">
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          value={dataPokemon}
          placeholder="procure o pokemon"
          onChange={(e) => setDataPokemon(e.target.value)}
        />
        <button type="submit">Procurar</button> */}
        <SearchBarAutoComplete
          value={dataPokemon}
          setDataPokemon={setDataPokemon}
          pokemonNamesArr={pokemonNamesArr}
        />
      </form>

      {result && (
        <div className="container-only-pokemon">
          <PokemonCard elem={result} />
        </div>
      )}
    </div>
  );
};

export default FormPokemon;
