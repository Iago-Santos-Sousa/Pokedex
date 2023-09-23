import { useEffect, useState } from "react";
import { fetchPokemon } from "./components/api/fetchPokemon";
import { fetchPokemonByType } from "./components/api/fetchPokemonByType";
import { fetchPokemonList } from "./components/api/fetchPokemonList";
import LoadMore from "./components/loadMore";
import FormPokemon from "./components/FormPokemon";
import SearchBarAutoComplete from "./components/SearchBarAutoComplete";
import { pokemonNamesArr } from "./utils/pokemonNamesArr";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonDataType, setPokemonDataType] = useState([]);
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 9;
  const [pokemonLength, setPokemonLength] = useState(0);

  useEffect(() => {
    // fetchPokemon
    // async function fetchDataPokemon() {
    //   const { response, data, error } = await fetchPokemon("pikachu");
    //   if (!error) {
    //     setPokemonData(data);
    //     setError(false);
    //   } else {
    //     setPokemonData(null);
    //     setError(true);
    //   }
    // }
    // fetchDataPokemon();
    // fetchPokemonByType
    // async function fetchDataByType() {
    //   const type = "electric";
    //   const startIndex = (page - 1) * pokemonsPerPage;
    //   const { dataLength, pokemonList } = await fetchPokemonByType(
    //     type,
    //     startIndex,
    //     pokemonsPerPage,
    //   );
    //   // console.log(pokemonList);
    //   if (pokemonList.length > 0) {
    //     setPokemonDataType((prev) => [...prev, ...pokemonList]);
    //     setPokemonLength(dataLength);
    //     setError(false);
    //   } else {
    //     setPokemonDataType([]);
    //     setError(true);
    //   }
    // }
    // fetchDataByType();
    // fetchPokemonList
    // async function fetchDataList() {
    //   const pokemonList = await fetchPokemonList(page);
    //   if (pokemonList.length > 0) {
    //     setPokemonDataList((prev) => [...prev, ...pokemonList]);
    //     setError(false);
    //   } else {
    //     setPokemonDataList([]);
    //     setError(true);
    //   }
    // }
    // fetchDataList();
  }, [page]);

  // console.log({pokemonData})
  // console.log({ pokemonDataType });
  // console.log({ pokemonDataList });

  return (
    <>
      {/* <LoadMore /> */}
      {/* <ul>
        {pokemonDataList.map((elem, index) => (
          <li key={index}>{elem.name}</li>
        ))}
      </ul>
      <button
        onClick={() => setPage(page + 1)}
        disabled={pokemonDataList.length === 100}
      >
        Load more
      </button> */}
      <FormPokemon />
      {/* <SearchBarAutoComplete pokemonNames={pokemonNamesArr} /> */}
    </>
  );
}

export default App;
