import { fetchPokemon } from "../components/api/fetchPokemon";
import { useState } from "react";

const FormPokemon = () => {
  const [dataPokemon, setDataPokemon] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dataPokemon) return;
    async function fetchDataPokemon() {
      const { response, data, error } = await fetchPokemon(
        dataPokemon.toLocaleLowerCase(),
      );

      if (!error) {
        // setDataPokemon(data);
        setResult(data.name);
        setError(false);
        setDataPokemon("");
        console.log(response);
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
      {result && <p>{result}</p>}
    </div>
  );
};

export default FormPokemon;
