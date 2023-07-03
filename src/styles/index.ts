import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;

    height: 100vh;

    section{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      width: 100%;
      max-width:600px;

      margin: 0 auto;
      padding: 24px 16px 90px 16px;

      h1{
        width: 100vw;
        text-align: center;
        text-transform: uppercase;
      }
      div#label{
        display: flex;
        align-items: center;
        justify-content: center;
        span{
          padding: 0px 8px;
        }
        span:first-child{
          border-right: 1px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: #EED847;
          &:before{
            content: "";
            display: inline-block;
            position: relative;
            top: 0;
            left: 0;
            width: 12px;
            height: 12px;
            border-radius:50%;
            background-color:#EED847;
          }
        }
        span:nth-child(2){
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: #B6EB0C;
          &:before{
            content: "";
            display: inline-block;
            position: relative;
            top: 0;
            left: 0;
            width: 12px;
            height: 12px;
            border-radius:50%;
            background-color:#B6EB0C;
          }
        }
      }
      div#container{
        display: grid;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 600px;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 12px;
      }

      @media only screen and (min-width: 768px) {
        div#container{
          grid-template-columns:1fr 1fr 1fr 1fr;
        }
      }
    }


`
