import { useState } from "react";
import FormPokemon from "./components/FormPokemon/FormPokemon";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonPerType from "./components/PokemonPerType/PokemonPerType";
import { typesPokemons } from "./utils/typesPokemons";

function App() {
  const [pokemonDataType, setPokemonDataType] = useState([]);
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loadSpinner, setLoadSpinner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pokemonLength, setPokemonLength] = useState(0);
  const [optionRender, setOptionRnder] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const pokemonPerPage = 9;
  const [isPokemonPerTypeVisible, setIsPokemonPerTypeVisible] = useState(false);

  console.log({ pokemonDataType });
  console.log({ pokemonDataList });
  // console.log({ optionRender });

  const handleTypeChange = async (type) => {
    // adiicona o tipo de pokemon ao clicar em algum radio button
    setSelectedType(type);
    // Redefina a página para 1 ao mudar o tipo
    setPage(1);
    // Limpe os dados existentes quando um novo tipo é selecionado
    setPokemonDataType([]);
    // setPokemonDataList([]);
    // Mostrar o componente PokemonPerType quando um tipo é selecionado
    setIsPokemonPerTypeVisible(true);
    setOptionRnder(true);
  };

  const initialPage = () => {
    setPokemonDataType([]);
    setOptionRnder(false);
    setSelectedType("");
    setPokemonDataList([]);
    setPage(1);
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => initialPage()}>Inicio</button>
      </div>
      <div className="checkboxes" style={{ display: "flex", gap: "20px" }}>
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

      <FormPokemon
        loadSpinner={loadSpinner}
        setLoadSpinner={setLoadSpinner}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        setOptionRnder={setOptionRnder}
        optionRender={optionRender}
        setPokemonDataList={setPokemonDataList}
        setPokemonDataType={setPokemonDataType}
        setSelectedType={setSelectedType}
      />

      <div className="pokedex-container">
        {!optionRender && (
          <PokemonList
            pokemonDataList={pokemonDataList}
            setPokemonDataList={setPokemonDataList}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            loadSpinner={loadSpinner}
            setLoadSpinner={setLoadSpinner}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            page={page}
            setPage={setPage}
            setOptionRnder={setOptionRnder}
            optionRender={optionRender}
            pokemonLength={pokemonLength}
          />
        )}

        {/* Renderizar o componente PokemonPerType se for visível */}
        {isPokemonPerTypeVisible && optionRender && (
          <PokemonPerType
            pokemonDataType={pokemonDataType}
            setPokemonDataType={setPokemonDataType}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            loadSpinner={loadSpinner}
            setLoadSpinner={setLoadSpinner}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            page={page}
            setPage={setPage}
            setOptionRnder={setOptionRnder}
            optionRender={optionRender}
            pokemonPerPage={pokemonPerPage}
            pokemonLength={pokemonLength}
            setPokemonLength={setPokemonLength}
            selectedType={selectedType}
          />
        )}
      </div>
    </div>
  );
}

export default App;
