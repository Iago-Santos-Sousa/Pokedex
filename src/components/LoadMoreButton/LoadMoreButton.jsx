const LoadMoreButton = ({ page, setPage, pokemonData, pokemonLength }) => {
  const loadMorePokemon = () => {
    // Função para carregar mais Pokémon
    setPage(page + 1);
  };

  return (
    <button
      onClick={loadMorePokemon}
      disabled={pokemonData?.length === pokemonLength}
      className="carregar-mais"
    >
      Carregar mais
    </button>
  );
};

export default LoadMoreButton;
