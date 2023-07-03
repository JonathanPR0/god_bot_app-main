import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { IoGameController } from 'react-icons/io5'
import { VscGraph } from "react-icons/vsc"
import { Container } from "@/styles/resultados";

import React, { useState } from "react";
import Image from 'next/image';

import img from "../../public/game.jpg";
import { TableRow } from "@/components/TableRow";
import { Modal } from "@/components/Modal";


const Academia = () => {
  const [modalIsActive, setModalIsActive] = useState<boolean>(false)
  return (
    <Container>
      <Header />
      <section>
        <h1>Resultados God Boot</h1>
        <table>
          <tr>
            <th><IoGameController />Jogo</th>
            <th><VscGraph />Placar</th>
          </tr>
          <TableRow gameName="Mines" gameDescription="Spribe Games" green={135} red={3} percentage={97.35} setModalIsActive={setModalIsActive}><Image src={img} alt='jogo' /></TableRow>
          <TableRow gameName="Mines" gameDescription="Spribe Games" green={135} red={3} percentage={97.35} setModalIsActive={setModalIsActive}><Image src={img} alt='jogo' /></TableRow>
          <TableRow gameName="Mines" gameDescription="Spribe Games" green={135} red={3} percentage={97.35} setModalIsActive={setModalIsActive}><Image src={img} alt='jogo' /></TableRow>
          <TableRow gameName="Mines" gameDescription="Spribe Games" green={135} red={3} percentage={97.35} setModalIsActive={setModalIsActive}><Image src={img} alt='jogo' /></TableRow>
          <TableRow gameName="Mines" gameDescription="Spribe Games" green={135} red={3} percentage={97.35} setModalIsActive={setModalIsActive}><Image src={img} alt='jogo' /></TableRow>
        </table>
      </section>
      <Menu />
      <Modal isActive={modalIsActive} setIsActive={setModalIsActive} date="16/04" />
    </Container>
  );
};
export default Academia;
