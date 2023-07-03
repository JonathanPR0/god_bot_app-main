import { Container } from './styles';

import { IoGameController } from 'react-icons/io5'
import { VscGraph } from 'react-icons/vsc'
import { TbMoneybag } from 'react-icons/tb'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image';
import img from "../../../public/game.jpg";
import { ModalTableRow } from './ModalTableRow';

interface ModalProps {
  date: string;
  isActive: boolean;
  setIsActive(value: boolean): void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { date, isActive, setIsActive } = props;

  return (
    <Container className={`${isActive ? "isActive" : ""}`}>
      <table>
        <header>
          {/* <Image/> */}
          <div>
            <h3>Jogos que + estão pagando</h3>
            <span>{date}</span>
          </div>
          <AiOutlineClose className='closebtn' onClick={() => setIsActive(false)} />

        </header>
        <tr>
          <th><IoGameController /><p>Jogo</p></th>
          <th><VscGraph /><p>Assertividade</p></th>
          <th><TbMoneybag /><p>Sacado</p></th>
        </tr>
        <ModalTableRow percentage={97.83} moneyWithdrawn='34.827,48'><Image src={img} alt='Jogo' /></ModalTableRow>
        <ModalTableRow percentage={97.83} moneyWithdrawn='34.827,48'><Image src={img} alt='Jogo' /></ModalTableRow>
        <ModalTableRow percentage={97.83} moneyWithdrawn='34.827,48'><Image src={img} alt='Jogo' /></ModalTableRow>
      </table>
    </Container>
  );
};
