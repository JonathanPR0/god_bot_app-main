import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid #FFF;
    header{
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      max-width: 1024px;
      margin: 0 auto;

      .logo{
        display: flex;
        align-items: center;
        gap: 5px;
        img{
            width: 64px;
            height: 30px;
        }
        p{
            font-size: 14px;

            border-left: 1px solid #fff;

            padding-left: 5px;
        }
    }

    .buttons{
        display: flex;
        align-items: center;
        gap: 16px;

        button{
            border: none;
            background: none;

            cursor: pointer;
        }

        .bell{
            color: var(--green);
            font-size: 24px;
        }

        .signout{
            color: var(--gray);
            font-size: 24px;
        }
    }
    }
`
