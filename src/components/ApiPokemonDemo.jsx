import { useEffect, useState } from "react";
import SearchBarAutoComplete from "./SearchBarAutoComplete";

function ApiPokemonDemo() {
  const [list, setList] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((response) => response.json())
      .then((response) => {
        // console.log({ response });
        const sortedArray = [...response.results];

        sortedArray.sort((a, b) => {
          // função que compara os nomes
          return a.name.localeCompare(b.name);
        });
        // console.log({ sortedArray });

        const promisesArray = sortedArray.map(async (item) => {
          // criamos um array com diversas promises
          return await fetch(item.url).then((response) => response.json());
        });

        Promise.all(promisesArray).then((values) => {
          setList(values);
          const pokemonNamesArray = values.map((item) => item.name);
          setPokemonNames(pokemonNamesArray); // Salva os nomes em outro array
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log({ list });
  console.log({ pokemonNames });

  return (
    <>
      <h1>Desafio pokemon</h1>
      <h1>Consumir api pokemon</h1>
      <br />
      <SearchBarAutoComplete pokemonNames={pokemonNames} />
      {list.lenght === 0 && "carregando pokemons..."}
      {list.map((item) => (
        <Pokemon key={item.name} details={item} />
      ))}
    </>
  );
}

const Pokemon = ({ details }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={details.sprites.other.dream_world.front_default}
        alt=""
        style={{ width: "100px", height: "100px", marginRight: "20px" }}
      />
      <span>
        <b>{details.name}</b> - EXP {details.base_experience} - HP{" "}
        {details.stats[0].base_stat}
      </span>
    </div>
  );
};

export default ApiPokemonDemo;
