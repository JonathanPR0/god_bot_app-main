import { useState, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface MenuLinkProps {
  name: string
  href: string
  children: ReactNode
  isActive: boolean //Mudar para tipo string e implementar função de click
  setIsActive: (value: string) => void
}

export const MenuLink: React.FC<MenuLinkProps> = (props) => {
  const router = useRouter();
  const path = router.pathname;
  function handleClick(){
    //falta implementar
  }

  return (
    <li className={props.isActive ? "active" : ""} onClick={handleClick}> <Link href={props.href}>{props.children}<span>{props.name}</span></Link></li>
  )
}

