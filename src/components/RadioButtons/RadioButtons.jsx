import { typesPokemons } from "../../utils/typesPokemons";

const RadioButtons = ({ handleTypeChange, selectedType }) => {
  return (
    <div
      className="checkboxes"
      style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
    >
      {typesPokemons.map((elem, index) => (
        <div key={index}>
          <label htmlFor={elem}>{elem}</label>
          <input
            type="radio"
            name="pokemon"
            id={elem}
            value={elem}
            checked={selectedType === elem}
            onChange={() => handleTypeChange(elem)}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
