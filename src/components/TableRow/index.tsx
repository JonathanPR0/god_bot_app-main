import { ReactNode } from 'react';
import { Container } from './styles';

interface TableRowProps {
  gameName: string;
  gameDescription: string;
  green: number;
  red: number;
  percentage: number;
  children: ReactNode,
  setModalIsActive: (value: boolean) => void;
}

export const TableRow: React.FC<TableRowProps> = (props) => {
  const { gameName, gameDescription, green, red, percentage, children, setModalIsActive } = props;
  return (
    <Container onClick={() => setModalIsActive(true)}>
      <td className='game'>
        {children}
        <div>
          <h3>{gameName}</h3>
          <p>{gameDescription}</p>
        </div>
      </td>
      <td>
        <span>{green} Greens</span>
        <span>{red} reds</span>
        <span>{percentage}%</span>
      </td>
    </Container>
  );
};
