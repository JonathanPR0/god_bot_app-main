import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;

    margin-bottom: 15px;
    input {
        width: 100%;
        padding: 16px 20px;
        border: 1px solid var(--gray);
        background: none;
        border-radius: 8px;
        outline: none;
        color: #FFF;
        font-size: 15px;
    }
    & input:focus {
      border: 1px solid var(--green);
    }

    & span {
        position: absolute;
        left: 10px;
        top: -14px;
        background-color:var(--black);
        padding: 5px;
        font-size: 12px;
        color: #FFF;
        text-transform: uppercase;
        transition: 0.2s;
    }
` 