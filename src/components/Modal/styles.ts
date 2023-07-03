import { styled } from "styled-components";


export const Container = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  padding: 16px 40px;
  background: rgba( 0, 0, 0, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-top: 1px solid rgba( 255, 255, 255, 0.18 );

  img{
    width: 100px;
    height: auto;
    border-radius:10px;
  }

  table{
    display: grid;
    grid-template-columns: minmax(100px, 1fr) 2fr 2fr;
    width: 100%;
    max-width: 764px;
    padding: 16px;
    border-radius: 10px;
    background: var(--bg-color);
    position: relative;

    header{
      display : flex;
      justify-content: space-between;
      padding-bottom: 16px;
      grid-column: 1 / -1;

      svg.closebtn{
        font-size: 24px;
        border: 1px solid #fff;
        border-radius:4px;
        padding: 4px;
        cursor: pointer;
      }
    }
    tr{
      display: grid;
      grid-template-columns: minmax(100px, 1fr) 2fr 2fr;
      grid-column: 1 / -1;
      width: 100%;

      td, th{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 8px;
      }

      td.mark{
        font-weight: 700;
        color: green;
      }
    }
  }
  &.isActive{
    display:flex;
  }
  @media only screen and (max-width: 768px) {
    &.isActive{
      padding: 12px 40px;
      font-size: 12px;
      table tr th{
        flex-direction: column;
        padding:8px;
      }
      img{
        width:80px;
      }
    }
  }

`
