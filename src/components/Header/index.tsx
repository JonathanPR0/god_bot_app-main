import React from 'react';
import Image from 'next/image';
import { FaSignOutAlt, FaRegBell } from 'react-icons/fa';

import { Container } from './styles';

import Logo from '@/assets/logo-nome.png';

interface headerProps {

}

export const Header: React.FC<headerProps> = () => {
  return (
    <Container>
      <header>
        <div className="logo">
          <Image src={Logo} alt="logo" />
          <p>Seja bem-vindo <strong>Anderson</strong></p>
        </div>
        <div className="buttons">
          <button className='bell'><FaRegBell /></button>
          <button className='signout'><FaSignOutAlt /></button>
        </div>
      </header>
    </Container>
  );
};

