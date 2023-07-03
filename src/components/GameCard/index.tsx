import React from 'react';
import Image from 'next/image';

import { Container } from './styles';
import autoprefixer from 'autoprefixer';

interface GameCardProps {
  isDisabled?: boolean;
  isAnimate?: boolean;
}

import img from "../../../public/game.jpg";

export const GameCard: React.FC<GameCardProps> = (props) => {
  return (
    <Container>
      <Image src={img} alt="jogo" className={`${props.isDisabled
        ? "disabled" : ""} ${props.isAnimate
          ? "pulseAnimate" : ""}`} />
    </Container>
  );
};
