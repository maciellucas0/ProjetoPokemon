import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;

  align-items: center;

  background-color: rgba(240, 243, 165, 0.18);
`;

export const UlPokemons = styled.ul`
  width: 700px;
  margin: auto;

  margin-top: 2rem;

  display: flex;

  flex-wrap: wrap;
  justify-content: space-evenly;
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

export const Div = styled.div`
  border: solid 1px black;
  margin-left: 5%;

  height: 300px;
  width: 300px;

  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  text-align: center;

  border-radius: 10%;

  img {
    width: 90%;
    height: 90%;
    margin-left: 5%;
  }
`;
