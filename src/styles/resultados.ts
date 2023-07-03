import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;


    section{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 24px;

        width: 100%;
        height: auto;
        max-width: 600px;
        margin: 0 auto;
        padding: 24px 16px 90px 16px;

    }

      h1{
        width: 100vw;
        text-align: center;
        text-transform: uppercase;
      }

      table{
        display: grid;
        width: 100%;
        max-width: 1024px;
        grid-template-columns:3fr minmax(120px, 1fr);

        tr{
          display: grid;
          grid-column: 1 / span 2;
          grid-template-columns:3fr minmax(120px, 1fr);

          background: rgba(18, 15, 0, 0.8);

          &:nth-child(2n + 1){
            background: rgba(18, 15, 0, 0.5);
          }

          th{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            background: rgb(234,204,0);
            background: linear-gradient(90deg, rgba(234,204,0,1) 0%, rgba(212,165,11,1) 100%);

            padding: 8px 16px;
          }
        }
      }

      @media only screen and (min-width: 768px) {
        section#container{
          grid-template-columns:1fr;
        }
      }
    }


`
