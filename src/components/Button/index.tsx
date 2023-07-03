import { useEffect, useState, ReactNode, ButtonHTMLAttributes } from "react";
import { Container, ButtonTT } from "./styles";

import Link from 'next/link';


interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: any,
  link?: string,
  children: ReactNode,
}

export const Button = (props: ButtonInterface) => {
  const { children, link, onClick, ...rest } = props
  const [linkText, setLinkText] = useState('')

  useEffect(() => {
    link ? setLinkText(link) : setLinkText('');
  }, [link])

  return (
    <Container>
      <Link href={linkText}>
        <ButtonTT onClick={onClick} {...rest}>{children}</ButtonTT>
      </Link>
    </Container>
  );
}
