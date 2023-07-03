import { useState } from 'react';
import { Container } from './styles';

import { IoGameController } from 'react-icons/io5'
import { FaGraduationCap } from 'react-icons/fa'
import { LuVerified } from 'react-icons/lu'
import { MenuLink } from './MenuLink';

interface MenuProps {

}

export const Menu: React.FC<MenuProps> = () => {
  const [isActive, setIsActive] = useState("jogos");
  // const path = router.pathname.slice(1, router.pathname.length);
  // console.log(path);

  return (
    <Container>
      <ul>
        <MenuLink href='academia' name='Academia' setIsActive={setIsActive} isActive={false}><FaGraduationCap /></MenuLink>
        <MenuLink href='/' name='Jogos' setIsActive={setIsActive} isActive={true}><IoGameController /></MenuLink>
        <MenuLink href='resultados' name='Resultados' setIsActive={setIsActive} isActive={false}><LuVerified /></MenuLink>
      </ul>
    </Container>
  );
};
