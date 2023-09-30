import Wrapper from "./components/Wrapper/Wrapper";
import { usePokemons } from "./context/PokemonContext";

function App() {
  const { isHidden } = usePokemons();
  return (
    <div className={`App`}>
      <Wrapper />
    </div>
  );
}

export default App;
