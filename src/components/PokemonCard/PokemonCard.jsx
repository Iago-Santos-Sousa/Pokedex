import { baseURL } from "../../utils/baseURL";
import { pokemonTypesColors } from "../../utils/pokemonTypesColors";

const PokemonCard = ({ elem }) => {
  const type1Color =
    pokemonTypesColors.find((type) => elem.types[0]?.type.name === type.name)
      ?.color || "#ffffff"; // Default to white if type not found

  const type2Color =
    pokemonTypesColors.find((type) => elem.types[1]?.type.name === type.name)
      ?.color || "#ffffff"; // Default to white if type not

  return (
    <div className="card">
      <div className="bg-pokeball"></div>
      <span className="pokemon-id">{`#${elem.id
        .toString()
        .padStart(3, "000")}`}</span>
      <div className="card-title">
        <h2>{elem.name}</h2>
        <div className="descriptions">
          <div className="pokemon-types">
            <span className="type" style={{ background: `${type1Color}` }}>
              {elem.types[0]?.type.name}
            </span>
            <span className="type" style={{ background: `${type2Color}` }}>
              {elem.types[1]?.type.name}
            </span>
          </div>
          <div className="Height-Weight">
            <span className="Height">{elem.height}</span>
            <span className="Weight">{elem.weight}</span>
          </div>
        </div>
      </div>
      <div className="pokemon-image">
        <img
          src={
            parseInt(elem.id) >= 650
              ? `${baseURL}/official-artwork/${elem.id}.png`
              : `${baseURL}/dream-world/${elem.id}.svg`
          }
          alt={elem.name}
          height="133.031px"
          width="137.922px"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
