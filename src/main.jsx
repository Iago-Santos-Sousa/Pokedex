import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import PokemonsProvider from "./context/PokemonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonsProvider>
      <App />
    </PokemonsProvider>
  </React.StrictMode>,
);
