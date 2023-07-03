import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;


    div#academyContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;

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
        margin: 24px 0 0 0;
      }

      @media only screen and (min-width: 768px) {
        section#container{
          grid-template-columns:1fr;
        }
      }
    }


`
