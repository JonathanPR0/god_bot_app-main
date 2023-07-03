import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";

import { Container } from "@/styles/academia";

import React from "react";
import { Card } from "@/components/Card";


const Academia = () => {
  return (
    <Container>
      <Header />
      <section>
        <h1>God Boot</h1>
        <div id="academyContainer">
          <Card hasBtn />
          <Card />
          <Card />
        </div>
      </section>
      <Menu />
    </Container>
  );
};
export default Academia;
