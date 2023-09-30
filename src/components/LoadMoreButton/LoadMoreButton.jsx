import "./LoadMoreButton.scss";

const LoadMoreButton = ({
  page,
  setPage,
  pokemonData,
  pokemonLength,
  isLoading,
}) => {
  const loadMorePokemon = () => {
    // Função para carregar mais Pokémon
    setPage(page + 1);
  };

  return (
    <button
      onClick={loadMorePokemon}
      disabled={isLoading || pokemonData?.length === pokemonLength}
      className={`load-more-button ${isLoading && "loading"}`}
    >
      <i className="fa-solid fa-circle-plus"></i>
      Carregar mais
    </button>
  );
};

export default LoadMoreButton;
