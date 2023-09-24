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
      className="carregar-mais"
    >
      Carregar mais
    </button>
  );
};

export default LoadMoreButton;
