import { usePokemons } from "../../context/PokemonContext";
import { typesPokemons } from "../../utils/typesPokemons";

const RadioButtons = () => {
  const { handleTypeChange, selectedType } = usePokemons();
  return (
    <div className="checkboxes">
      <ul
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          listStyle: "none",
        }}
      >
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
  );
};

export default RadioButtons;
