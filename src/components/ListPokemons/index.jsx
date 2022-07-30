import { CardPokemons } from "../CardPokemon";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";

import { LiPokemons, UlPokemons } from "./style";

export const ListPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api
      .get("pokemon", {
        limit: 1000,
        offset: 5,
      })
      .then((result) => setPokemons(result.data.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(pokemons);

  return (
    <>
      <UlPokemons>
        {pokemons.map((item, index) => (
          <LiPokemons key={index}>
            <CardPokemons item={item} />
          </LiPokemons>
        ))}
      </UlPokemons>
    </>
  );
};
