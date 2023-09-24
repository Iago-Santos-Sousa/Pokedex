const PokemonCard = ({ elem }) => {
  return (
    <div className="card">
      <div className="bg-pokeball"></div>
      <span className="pokemon-id">{elem.id}</span>
      <div className="card-title">
        <h2>{elem.name}</h2>
        <div className="pokemon-types">
          <span className="type">{elem.types[0]?.type.name}</span>
          <span className="type">{elem.types[1]?.type.name}</span>
        </div>
      </div>
      <div className="pokemon-image">
        <img src={elem.sprites.back_default} alt={elem.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
