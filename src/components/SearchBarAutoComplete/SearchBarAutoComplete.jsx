import React, { useState } from "react";
import "./SearchBarAutoComplete.scss";

const SearchBarAutoComplete = ({ value, setDataPokemon, pokemonNamesArr }) => {
  const [results, setResults] = useState([]);
  // console.log(results);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setDataPokemon(input);

    if (input.length) {
      const filteredResults = pokemonNamesArr.filter((keyword) =>
        keyword.toLowerCase().includes(input.toLowerCase()),
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleSelectInput = (selectedValue) => {
    setDataPokemon(selectedValue);
    setResults([]);
  };

  return (
    <div className="search-box">
      <div className="row">
        <input
          type="text"
          id="input-box"
          placeholder="Search pokemon"
          autoComplete="off"
          value={value}
          onChange={handleInputChange}
        />
        <button onClick={() => setResults([])}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="results-box">
        <ul>
          {results.map((result) => (
            <li key={result} onClick={() => handleSelectInput(result)}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBarAutoComplete;
