import React from 'react';
import Image from 'next/image';

import { Container } from "./styles";
import { Button } from '../Button';
import { BiRefresh } from 'react-icons/bi';

import autoprefixer from 'autoprefixer';

interface CardProps {
  hasBtn?: boolean;
  btnText?: string;
}

import img from "../../../public/img.jpg";

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Container>
      <section>
        <Image src={img} alt="imagem do card" />
        <p>Galáxias são grandes estruturas cósmicas compostas por estrelas, planetas, gás, poeira cósmica e outros corpos celestes.</p>
        {props.hasBtn && (
          <Button>
            <BiRefresh />
            <p>{props.btnText || "Seja god bot"}</p>
          </Button>
        )}
      </section>
    </Container>
  );
};
