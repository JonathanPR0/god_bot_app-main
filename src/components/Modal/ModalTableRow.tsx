import { ReactNode } from 'react'

interface ModalTableRowProps {
  moneyWithdrawn: string;
  percentage: number;
  children: ReactNode;
}

export const ModalTableRow: React.FC<ModalTableRowProps> = (props) => {
  const { moneyWithdrawn, percentage, children } = props;

  return (
    <tr>
      <td>{children}</td>
      <td>({percentage}%)</td>
      <td className='mark'>R${moneyWithdrawn}</td>
    </tr>
  );
};
