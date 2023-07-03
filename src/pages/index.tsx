import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/Button";

import { BiRefresh } from 'react-icons/bi'

import { Container } from "@/styles";

import React from "react";


const Jogos = () => {
  return (
    <Container>
      <Header />
      <section>
        <h1>Escolha o jogo que você deseja hackear</h1>
        <div id="label">
          <span>Possível falha</span>
          <span>Hack confirmado</span>
        </div>
        <div id="container">
          <GameCard />
          <GameCard />
          <GameCard isAnimate />
          <GameCard isDisabled />
          <GameCard isDisabled isAnimate />
          <GameCard isDisabled />
        </div>
        <Button>
          <BiRefresh />
          <p>Seja god bot</p>
        </Button>
      </section>
      <Menu />
    </Container>
  );
};
export default Jogos;
