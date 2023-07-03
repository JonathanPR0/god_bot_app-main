import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
:root{
  --green: #EACC00;
  --black: #090601;
  --gray: #C2C2C2;
  --white: #FFFFFF;
  --bg-color: #120F00;
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::-webkit-scrollbar{
        width: 10px;
}
*::-webkit-scrollbar-thumb{
    background-color: var(--black);
    border-radius: 20px;
}

body{
    color: var(--white);
    background: var(--black);
}

body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
}
section h1{
  width: 100vw;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 8px;
}
span{
        color: var(--green);
}
.pulseAnimate{
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
}
`
