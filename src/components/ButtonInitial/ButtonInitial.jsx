import { usePokemons } from "../../context/PokemonContext";
import "./ButtonInitial.scss";

const ButtonInitial = () => {
  const { handleInitialPage } = usePokemons();
  return (
    <div className="btn-initial">
      <button onClick={() => handleInitialPage()}>
        <i className="fa-solid fa-house-chimney"></i>
        <span>Inicio</span>
      </button>
    </div>
  );
};

export default ButtonInitial;
