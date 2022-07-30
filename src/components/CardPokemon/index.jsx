import { ButtonCard, DivCard, H3Card } from "./style";

export const CardPokemons = ({ item }) => {
  return (
    <>
      <DivCard>
        <H3Card>{item.name}</H3Card>
        <ButtonCard>Ver</ButtonCard>
      </DivCard>
    </>
  );
};
