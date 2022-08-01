import { ButtonCard, DivCard, H3Card } from "./style";

export const CardPokemons = ({ item, onClick }) => {
  return (
    <>
      <DivCard>
        <H3Card>{item.name}</H3Card>
        <ButtonCard onClick={onClick}>Ver Pokemon</ButtonCard>
      </DivCard>
    </>
  );
};
