const PokemonCard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="bg-pokeball"></div>
        <span className="pokemon-id">#001</span>
        <div className="card-title">
          <h2>bulbasaur</h2>
          <div className="pokemon-types">
            <span className="type">grass</span>
            <span className="type">poison</span>
          </div>
        </div>
        <div className="pokemon-image">
          <img
            src="	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="bulbasaur"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
