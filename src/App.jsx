import { useEffect, useState } from "react";
import FormPokemon from "./components/FormPokemon";
import PokemonList from "./components/PokemonList";
import PokemonPerType from "./components/PokemonPerType";
const typesPokemons = ["normal", "dragon"];

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonDataType, setPokemonDataType] = useState([]);
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 9;
  const [pokemonLength, setPokemonLength] = useState(0);
  const [option, setOption] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  // console.log({pokemonData})
  // console.log({ pokemonDataType });
  // console.log({ pokemonDataList });

  return (
    <>
      <div>
        {typesPokemons.map((elem, index) => (
          <div key={index}>
            <label htmlFor={elem}>{elem}</label>
            <input
              type="radio"
              name="pokemon"
              id={elem}
              value={elem}
              onClick={() => setSelectedType(elem)}
            />
          </div>
        ))}
      </div>

      {/* <FormPokemon
        setOption={setOption}
        setPokemonDataList={setPokemonDataList}
        setPokemonDataType={setPokemonDataType}
        setCheckbox={setCheckbox}
      /> */}
      {/* 
      {!option && (
        <PokemonList
          pokemonDataList={pokemonDataList}
          setPokemonDataList={setPokemonDataList}
          error={error}
          setError={setError}
          page={page}
          setPage={setPage}
          setOption={setOption}
        />
      )} */}

      {selectedType && (
        <PokemonPerType
          pokemonDataType={pokemonDataType}
          setPokemonDataType={setPokemonDataType}
          error={error}
          setError={setError}
          page={page}
          setPage={setPage}
          setOption={setOption}
          pokemonsPerPage={pokemonsPerPage}
          pokemonLength={pokemonLength}
          setPokemonLength={setPokemonLength}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      )}
    </>
  );
}

export default App;
