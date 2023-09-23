import React, { useState } from "react";
import styles from "./SearchBarAutoComplete.module.css";

const stylesSearchBox = {
  faSolid: {
    width: "25px",
    color: "#555",
    fontSize: "22px",
    cursor: "pointer",
  },

  ul: {
    // borderTop: "1px solid #999",
    // padding: "15px 10px",
  },

  li: {
    listStyle: "none",
    borderRadius: "3px",
    padding: "15px 10px",
    cursor: "pointer",
  },
};

const SearchBarAutoComplete = ({ pokemonNames }) => {
  // const availableKeywords = ["HTML", "CSS", "Easy Tutorials", "JavaScript"];
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);

    if (input.length) {
      const filteredResults = pokemonNames.filter((keyword) =>
        keyword.toLowerCase().includes(input.toLowerCase()),
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleSelectInput = (selectedValue) => {
    setInputValue(selectedValue);
    setResults([]);
  };

  return (
    <div className={styles.searchBox}>
      <div className={styles.row}>
        <input
          type="text"
          id="input-box"
          className={styles.input}
          placeholder="Search anything"
          autoComplete="off"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={styles.button}>
          <i
            className="fa-solid fa-magnifying-glass"
            style={stylesSearchBox.faSolid}
          ></i>
        </button>
      </div>
      <div className={styles.resultsBox}>
        <ul style={stylesSearchBox.ul}>
          {results.map((result) => (
            <li
              className={styles.li}
              style={stylesSearchBox.li}
              key={result}
              onClick={() => handleSelectInput(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBarAutoComplete;
