import { useState } from "react";
const items = ["JavaScript", "HTML", "CSS"];

const SearchBar = () => {
  const [inputValue, setFiltro] = useState("");

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="inputValue"
        placeholder="Filtrar lista"
        value={inputValue}
        onChange={handleFiltroChange}
      />
      <ul id="lista">
        {items.map((item, index) => {
          const inputValueLowerCase = inputValue.toLocaleLowerCase();
          const itemTextLoweCase = item.toLocaleLowerCase();
          const exibir = itemTextLoweCase.includes(inputValueLowerCase);
          return (
            <li key={index} style={{ display: exibir ? "" : "none" }}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
