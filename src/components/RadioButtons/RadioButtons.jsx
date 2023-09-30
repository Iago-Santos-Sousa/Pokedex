import { usePokemons } from "../../context/PokemonContext";
import { typesPokemons } from "../../utils/typesPokemons";
import "./RadioButtons.scss";

const RadioButtons = () => {
  const { handleTypeChange, selectedType } = usePokemons();
  return (
    <div className="radio-types">
      <span>Pesquisar por tipos</span>
      <div className="radios">
        <ul>
          {typesPokemons.map((elem, index) => (
            <li key={index}>
              <label htmlFor={elem}>{elem}</label>
              <input
                type="radio"
                name="pokemon"
                id={elem}
                value={elem}
                checked={selectedType === elem}
                onChange={() => handleTypeChange(elem)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RadioButtons;
