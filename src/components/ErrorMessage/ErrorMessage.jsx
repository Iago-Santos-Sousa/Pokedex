import "./ErrorMessage.scss";
import pokemonSvg from "../../assets/images/pokeball-svg.svg";

const ErrorMessage = () => {
  return (
    <div className="error-container">
      <img src={pokemonSvg} alt="" width="32px" height="32px" />
      <span>Pokémon não encontrado!</span>
    </div>
  );
};

export default ErrorMessage;
