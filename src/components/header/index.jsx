import { MdCatchingPokemon } from "react-icons/md";
import logoPokemon from "../../assets/logo-pokemon.png";
import { DivHeader, HeaderHome, ImagemLogo } from "./style";

export const Header = () => {
  return (
    <>
      <HeaderHome>
        <DivHeader>
          <MdCatchingPokemon size={60} />
          <ImagemLogo src={logoPokemon} alt="Logo Pokemon" />
        </DivHeader>
      </HeaderHome>
    </>
  );
};
