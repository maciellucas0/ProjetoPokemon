import { CardPokemons } from "../CardPokemon";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";

import { LiPokemons, Main, UlPokemons } from "./style";
import { Botoes } from "../Botoes/Botoes";

export const ListPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [buttonNextDisabled, setButtonNextDisabled] = useState(false);
  const [buttonPreviousDisabled, setButtonPreviousDisabled] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("pokemon", {
        params: {
          limit: 20,
          offset: offset * 10,
        },
      })
      .then((result) => {
        const { next, previous, results } = result.data;
        setButtonNextDisabled(!next);
        setButtonPreviousDisabled(!previous);
        setPokemons(results);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [offset]);

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Main>
          <UlPokemons>
            {pokemons.map((item, index) => (
              <LiPokemons key={index}>
                <CardPokemons item={item} />
              </LiPokemons>
            ))}
          </UlPokemons>
          <Botoes
            offset={offset}
            setOffset={setOffset}
            buttonNextDisabled={buttonNextDisabled}
            buttonPreviousDisabled={buttonPreviousDisabled}
          />
        </Main>
      )}
    </>
  );
};
