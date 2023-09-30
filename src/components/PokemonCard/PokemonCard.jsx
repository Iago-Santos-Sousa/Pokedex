import { useState } from "react";
import { baseURL } from "../../utils/baseURL";
import { pokemonTypesColors } from "../../utils/pokemonTypesColors";
import "./PokemonCard.scss";
import Modal from "../Modal/Modal";
import { usePokemons } from "../../context/PokemonContext";

const formatPokemonId = (id) => {
  if (id < 10) return `#00${id}`;
  else if (id >= 10 && id < 99) return `#0${id}`;
  else return `#${id}`;
};

const PokemonCard = ({ elem, index, arr }) => {
  const { isHidden, setIsHidden } = usePokemons();

  const [pokemon, setPokemon] = useState(null);

  const type1Color =
    pokemonTypesColors.find((type) => elem?.types[0]?.type?.name === type?.name)
      ?.color || "#ffffff";

  const type2Color =
    pokemonTypesColors.find((type) => elem?.types[1]?.type?.name === type?.name)
      ?.color || "#ffffff";

  return (
    <>
      <Modal
        pokemon={pokemon}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        setPokemon={setPokemon}
      />
      <div className="card" style={{ background: `${type1Color}` }}>
        <div className="bg-pokeball"></div>
        <div className="card-title">
          <span className="pokemon-id">{formatPokemonId(elem?.id)}</span>
          <h2>{elem?.name}</h2>
          <div className="descriptions">
            <div className="pokemon-types">
              <span className="type">{elem?.types[0]?.type?.name}</span>
              {elem?.types[1]?.type?.name && (
                <span className="type">{elem?.types[1]?.type?.name}</span>
              )}
            </div>
            <div className="Height-Weight">
              <span className="Height">{`${elem?.height / 10} m`}</span>
              <span className="Weight">{`${elem?.weight / 10} kg`}</span>
            </div>
          </div>
        </div>
        <div className="pokemon-image">
          <img
            src={
              parseInt(elem?.id) >= 650
                ? `${baseURL}/official-artwork/${elem?.id}.png`
                : `${baseURL}/dream-world/${elem?.id}.svg`
            }
            alt={elem?.name}
            loading="lazy"
          />
        </div>
        <button
          // style={{ background: `${type1Color}` }}
          onClick={() => {
            setIsHidden(true);
            setPokemon(elem);
          }}
        >
          Saiba mais
        </button>
      </div>
    </>
  );
};

export default PokemonCard;
