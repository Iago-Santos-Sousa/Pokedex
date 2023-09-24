import { fetchPokemon } from "../api/fetchPokemon";
import { useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

const FormPokemon = ({
  setOption,
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
    async function fetchDataPokemon() {
      const { response, data, error } = await fetchPokemon(
        dataPokemon.toLocaleLowerCase(),
      );

      if (!error) {
        setOption(true);
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
    console.log("continue");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={dataPokemon}
          placeholder="procure o pokemon"
          onChange={(e) => setDataPokemon(e.target.value)}
        />
        <button type="submit">Procurar</button>
      </form>
      {result && (
        <div className="container">
          <PokemonCard elem={result} />
        </div>
      )}
    </div>
  );
};

export default FormPokemon;
