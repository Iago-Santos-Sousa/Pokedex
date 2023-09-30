import FormPokemon from "../FormPokemon/FormPokemon";
import PokemonList from "../PokemonList/PokemonList";
import PokemonPerType from "../PokemonPerType/PokemonPerType";
import PokemonCard from "../PokemonCard/PokemonCard";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import RadioButtons from "../RadioButtons/RadioButtons";
import ButtonInitial from "../ButtonInitial/ButtonInitial";
import "./WrapperStyles.scss";
import { usePokemons } from "../../context/PokemonContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Wrapper = () => {
  const {
    loadSpinner,
    errorMessage,
    formPokemonResult,
    optionRender,
    isPokemonPerTypeVisible,
    pokemonDataList,
    pokemonDataType,
    page,
    setPage,
    pokemonLength,
    isLoading,
  } = usePokemons();
  return (
    <>
      <div className="main-container">
        <Header />
      </div>
      <main className="wrapper">
        <div className="main-container">
          <div className="form-btn">
            <ButtonInitial />
            <RadioButtons />
            <FormPokemon />
          </div>
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
            {!optionRender && <PokemonList />}
            {/* Renderizar o componente PokemonPerType se for visível */}
            {isPokemonPerTypeVisible && optionRender && !formPokemonResult && (
              <PokemonPerType />
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
      </main>
      <div className="main-container">
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
