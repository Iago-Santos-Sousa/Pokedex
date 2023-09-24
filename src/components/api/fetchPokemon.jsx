export const fetchPokemon = async (pokemon) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  let response;
  let data;
  let errorResponse;

  try {
    response = await fetch(URL);
    data = await response.json();
    errorResponse = false;
  } catch {
    data = "";
    errorResponse = true;
  }

  // console.log({ data });

  return { response, data: data, errorResponse };
};
