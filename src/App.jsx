import { useState } from "react";
import FormPokemon from "./components/FormPokemon/FormPokemon";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonPerType from "./components/PokemonPerType/PokemonPerType";
import { typesPokemons } from "./utils/typesPokemons";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import LoadSpinner from "./components/LoadSpinner/LoadSpinner";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";

function App() {
  const [formPokemonResult, setFormPokemonResult] = useState(null);
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

  // console.log({ pokemonDataType });
  // console.log({ pokemonDataList });
  // console.log({ optionRender });

  const handleTypeChange = async (type) => {
    // adiicona o tipo de pokemon ao clicar em algum radio button
    setSelectedType(type);
    // Redefina a página para 1 ao mudar o tipo
    setPage(1);
    // Limpe os dados existentes quando um novo tipo é selecionado
    setPokemonDataType([]);
    setPokemonDataList((prev) => {
      console.log("prev dataList:", prev);
      return [];
    });
    setFormPokemonResult(null);
    // Mostrar o componente PokemonPerType quando um tipo é selecionado
    setIsPokemonPerTypeVisible(true);
    setOptionRnder(true);
    setErrorMessage(false);
    setLoadSpinner(false);
  };

  const handleInitialPage = () => {
    if (pokemonDataList.length === 9) {
      console.log("array com 9 pokemons");
      return;
    } else {
      setPokemonDataType([]);
      setOptionRnder(false);
      setSelectedType("");
      setPokemonDataList((prev) => {
        return [];
      });
      setFormPokemonResult(null);
      setPage(1);
      setErrorMessage(false);
    }
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => handleInitialPage()}>Inicio</button>
      </div>

      <div
        className="checkboxes"
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
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
        setFormPokemonResult={setFormPokemonResult}
      />

      <div className="pokedex-container">
        {/* Mostrar o resultado do FormPokemon */}
        {loadSpinner && <LoadSpinner />}
        {errorMessage && !formPokemonResult ? (
          <div className="container-only-pokemon">
            <ErrorMessage />
          </div>
        ) : formPokemonResult && !errorMessage ? (
          <div className="container-only-pokemon">
            <PokemonCard elem={formPokemonResult} />
          </div>
        ) : null}

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
        {isPokemonPerTypeVisible && optionRender && !formPokemonResult && (
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
      {pokemonDataList.length > 0 && !optionRender && (
        <div className="button-container">
          <LoadMoreButton
            page={page}
            setPage={setPage}
            pokemonData={pokemonDataList}
            pokemonLength={pokemonLength}
            isLoading={isLoading}
          />
        </div>
      )}

      {pokemonDataType.length > 0 && optionRender && (
        <div className="button-container">
          <LoadMoreButton
            page={page}
            setPage={setPage}
            pokemonData={pokemonDataType}
            pokemonLength={pokemonLength}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
}

export default App;
