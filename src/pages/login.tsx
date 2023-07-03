import Image from "next/image"

import logo from '../assets/logo.png'

import { Container } from "@/styles/login"
import { Input } from "@/components/input"
import { Button } from "@/components/Button"

export default function Login() {
  return (
    <Container>
    <div className="Main">
      <h1>Bem vindo ao</h1>
      <Image src={logo} alt="Logo"/>
      <Input text="e-mail" placeholder="digite seu e-mail" type="email"/>
      <Input text="senha" placeholder="digite sua senha" type="password"/>

      <div className="checkboxWrapper">
        <input type="checkbox"/>
        <label htmlFor="">Li e aceito os <a href="#">Termos de Uso</a></label>
      </div>
      <Button link="home">Entrar</Button>

      <p>Não possui uma conta? <a href="#">Crie já!</a></p>
    </div>
    </Container>
  )
}
