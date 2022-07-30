import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  background-color: rgba(240, 243, 165, 0.18);
  height: 100vh;
`;

export const UlPokemons = styled.ul`
  width: 700px;
  margin: auto;

  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const LiPokemons = styled.li`
  width: 300px;

  border: 1px solid black;
  border-radius: 10px;

  background-image: linear-gradient(
    to right,
    rgba(250, 0, 0, 0.8),
    rgba(0, 211, 250, 0.8)
  );
  list-style: none;

  margin-top: 10px;
`;
