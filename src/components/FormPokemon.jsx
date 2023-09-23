import { fetchPokemon } from "../components/api/fetchPokemon";
import { useState } from "react";

const FormPokemon = () => {
  const [dataPokemon, setDataPokemon] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    async function fetchDataPokemon() {
      const { response, data, error } = await fetchPokemon(dataPokemon);
      if (!error) {
        // setDataPokemon(data);
        setResult(data.name);
        setError(false);
        setDataPokemon("");
      } else {
        setDataPokemon("");
        setError(true);
      }
    }
    fetchDataPokemon();
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
      {result && <p>{result}</p>}
    </div>
  );
};

export default FormPokemon;
