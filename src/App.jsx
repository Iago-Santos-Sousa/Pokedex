import { useEffect, useState } from "react";
import FormPokemon from "./components/FormPokemon";
import PokemonList from "./components/PokemonList";
import PokemonPerType from "./components/PokemonPerType";
import { typesPokemons } from "./utils/typesPokemons";
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonDataType, setPokemonDataType] = useState([]);
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [pokemonLength, setPokemonLength] = useState(0);
  const [option, setOption] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const pokemonPerPage = 9;
  const [isPokemonPerTypeVisible, setIsPokemonPerTypeVisible] = useState(false);

  // console.log({pokemonData})
  console.log({ pokemonDataType });
  // console.log({ pokemonDataList });

  const handleTypeChange = async (type) => {
    // adiicona o tipo de pokemon ao clicar em algum radio button
    setSelectedType(type);
    // Redefina a página para 1 ao mudar o tipo
    setPage(1);
    // Limpe os dados existentes quando um novo tipo é selecionado
    setPokemonDataType([]);
    // Mostrar o componente PokemonPerType quando um tipo é selecionado
    setIsPokemonPerTypeVisible(true);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        {typesPokemons.map((elem, index) => (
          <div key={index}>
            <label htmlFor={elem}>{elem}</label>
            <input
              type="radio"
              name="pokemon"
              id={elem}
              value={elem}
              checked={selectedType === elem}
              onChange={() => handleTypeChange(elem)}
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

      {/* Renderizar o componente PokemonPerType se for visível */}
      {isPokemonPerTypeVisible && (
        <PokemonPerType
          pokemonDataType={pokemonDataType}
          setPokemonDataType={setPokemonDataType}
          error={error}
          setError={setError}
          page={page}
          setPage={setPage}
          setOption={setOption}
          pokemonPerPage={pokemonPerPage}
          pokemonLength={pokemonLength}
          setPokemonLength={setPokemonLength}
          selectedType={selectedType}
        />
      )}

      <PokemonCard />
    </>
  );
}

export default App;
