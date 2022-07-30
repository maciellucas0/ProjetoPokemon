import { Global } from "./Styles/Styles";
import { Header } from "./components/header";

import "./App.css";
import { ListPokemons } from "./components/ListPokemons";

function App() {
  return (
    <>
      <Global />
      <Header />

      <ListPokemons />
    </>
  );
}

export default App;
