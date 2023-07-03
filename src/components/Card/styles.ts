import { styled } from "styled-components";


export const Container = styled.div`
    section{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap:16px;

      width: 100%;
      padding: 12px;
      background: var(--bg-color);
      border: 2px solid var(--green);
      border-radius: 8px;

      img{
        width: 100%;
        height: auto;

        border-radius: 10px;
      }
    }
`
