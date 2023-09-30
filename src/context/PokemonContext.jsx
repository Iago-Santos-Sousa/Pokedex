import { useState, useContext, createContext } from "react";

export const PokemonsContext = createContext();

export default function PokemonsProvider({ children }) {
  const [formPokemonResult, setFormPokemonResult] = useState(null);
  const [pokemonDataType, setPokemonDataType] = useState([]);
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const pokemonPerPage = 9;
  const [errorMessage, setErrorMessage] = useState(false);
  const [loadSpinner, setLoadSpinner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pokemonLength, setPokemonLength] = useState(0);
  const [optionRender, setOptionRnder] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [isPokemonPerTypeVisible, setIsPokemonPerTypeVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleTypeChange = async (type) => {
    // adiicona o tipo de pokemon ao clicar em algum radio button
    setSelectedType(type);
    // Redefina a página para 1 ao mudar o tipo
    setPage(1);
    // Limpe os dados existentes quando um novo tipo é selecionado
    setPokemonDataType([]);
    setPokemonDataList([]);
    setFormPokemonResult(null);
    // Mostrar o componente PokemonPerType quando um tipo é selecionado
    setIsPokemonPerTypeVisible(true);
    setOptionRnder(true);
    setErrorMessage(false);
    setLoadSpinner(false);
  };

  const handleInitialPage = () => {
    if (pokemonDataList.length === 9) {
      return;
    }

    setPokemonDataType([]);
    setOptionRnder(false);
    setSelectedType("");
    setPokemonDataList([]);
    setFormPokemonResult(null);
    setPage(1);
    setErrorMessage(false);
  };

  return (
    <PokemonsContext.Provider
      value={{
        formPokemonResult,
        setFormPokemonResult,
        pokemonDataType,
        setPokemonDataType,
        pokemonDataList,
        setPokemonDataList,
        pokemonPerPage,
        errorMessage,
        setErrorMessage,
        loadSpinner,
        setLoadSpinner,
        isLoading,
        setIsLoading,
        page,
        setPage,
        pokemonLength,
        setPokemonLength,
        optionRender,
        setOptionRnder,
        selectedType,
        setSelectedType,
        isPokemonPerTypeVisible,
        setIsPokemonPerTypeVisible,
        handleTypeChange,
        handleInitialPage,
        isHidden,
        setIsHidden,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}

export const usePokemons = () => {
  return useContext(PokemonsContext);
};
