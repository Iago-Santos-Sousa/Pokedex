import PokemonCard from "../PokemonCard/PokemonCard";
import { baseURL } from "../../utils/baseURL";
import { pokemonTypesColors } from "../../utils/pokemonTypesColors";
import "./Modal.scss";
import RangeView from "../RangeView/RangeView";
const labels = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

const Modal = ({ pokemon, isHidden, setIsHidden, setPokemon }) => {
  const closeModal = (e) => {
    if (e.target.classList.contains("overlay")) {
      setIsHidden(null);
      setPokemon(null);
    }
  };

  const formatPokemonId = (id) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  const type1Color =
    pokemonTypesColors.find(
      (type) => pokemon?.types[0]?.type?.name === type?.name,
    )?.color || "#ffffff"; // Default to white if type not found

  const type2Color =
    pokemonTypesColors.find(
      (type) => pokemon?.types[1]?.type?.name === type?.name,
    )?.color || "#ffffff"; // Default to white if type not

  if (!isHidden || !pokemon) return null;
  // console.log({ pokemon });
  const { stats } = pokemon;
  console.log({ stats });

  return (
    <div
      className={`modal ${isHidden ? "overlay" : "hide"}`}
      onClick={(e) => {
        closeModal(e);
      }}
    >
      <div className="modal-grid" style={{ background: `${type1Color}` }}>
        <div
          className="card-modal"
          // style={{ background: `${type1Color}` }}
        >
          <div className="card-title">
            <span className="pokemon-id">{formatPokemonId(pokemon?.id)}</span>
            <h2>{pokemon?.name}</h2>
            <div className="descriptions">
              <div className="pokemon-types">
                <span className="type">{pokemon?.types[0]?.type?.name}</span>
                {pokemon?.types[1]?.type?.name && (
                  <span className="type">{pokemon?.types[1]?.type?.name}</span>
                )}
              </div>
              <div className="Height-Weight">
                <span className="Height">{`${pokemon?.height / 10} m`}</span>
                <span className="Weight">{`${pokemon?.weight / 10} kg`}</span>
              </div>
            </div>
          </div>
          <div className="pokemon-image-modal">
            <img
              src={
                parseInt(pokemon?.id) >= 650
                  ? `${baseURL}/official-artwork/${pokemon?.id}.png`
                  : `${baseURL}/dream-world/${pokemon?.id}.svg`
              }
              alt={pokemon?.name}
            />
          </div>
        </div>
        <div className="line">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.1478 4.51135C40.5193 4.51135 50.6682 14.0049 51.6974 26.1045H36.983C36.1071 21.9436 32.4176 18.8119 27.9945 18.8119C23.5715 18.8119 19.8819 21.9436 19.0061 26.1045H4.59824C5.63832 14.0049 15.7873 4.51135 28.1478 4.51135ZM33.0635 26.1045C33.2825 26.6958 33.4029 27.3309 33.4029 27.9989H33.4139C33.4139 28.6668 33.2934 29.3019 33.0745 29.8932C32.3081 31.9518 30.3265 33.4081 28.0055 33.4081C25.6845 33.4081 23.7028 31.9408 22.9365 29.8932C22.7175 29.3019 22.5971 28.6668 22.5971 27.9989H22.5861C22.5861 27.3309 22.7065 26.6958 22.9255 26.1045C23.6919 24.0459 25.6735 22.5896 27.9945 22.5896C30.3155 22.5896 32.2972 24.0569 33.0635 26.1045ZM27.8413 51.4973C15.4698 51.4973 5.32082 42.0038 4.29169 29.9041H19.0061C19.8819 34.0651 23.5715 37.1968 27.9945 37.1968C32.4176 37.1968 36.1071 34.0651 36.983 29.9041H51.4018C50.3617 41.9928 40.2127 51.4973 27.8413 51.4973ZM27.9945 0C12.5357 0 0 12.5376 0 27.9989C0 43.4601 12.5357 55.9977 27.9945 55.9977C43.4534 55.9977 56 43.471 56 27.9989C56 12.5267 43.4643 0 27.9945 0Z"
              fill="white"
              fillOpacity="0.25"
            ></path>
          </svg>
        </div>
        <div className="pokemon-stats">
          <span>Stats</span>
          <ul>
            {labels.map((label, i) => (
              <li key={label}>
                <span>{label}</span>
                <span>{stats[i].base_stat}</span>
                <div>
                  <RangeView value={stats[i].base_stat} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <button className="btn-close">Fechar</button> */}
      </div>
    </div>
  );
};

export default Modal;
