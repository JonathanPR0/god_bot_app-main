import { styled } from "styled-components"


export const Container = styled.div`
    width:100%;
    height: 52px;
    a{
        width: 100%;
        height: 52px;
        color: #FFF;
        text-decoration: none;
    }
`

export const ButtonTT = styled.button`
    display: flex;
    width: 100%;
    height: 52px;
    align-items: center;
    justify-content: center;
    gap: 24px;

    background: var(--green);

    font-size: 16px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;

    border: none;
    border-radius: 8px;
    padding: 8px 32px;

    cursor: pointer;

    transition: filter 0.2s;
    animation: pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

    &:hover{
        filter: brightness(0.9)
    }
    svg{
      font-size: 32px;
    }
`
