import { styled } from "styled-components";


export const Container = styled.div`
    width: 100vw;

    position: fixed;
    bottom: 0;

    padding: 16px 40px;
    background: rgba( 0, 0, 0, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-top: 1px solid rgba( 255, 255, 255, 0.18 );

    ul{
        list-style: none;

        display: flex;
        align-items: center;
        justify-content: space-around;


        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          cursor: pointer;

          a {
            color: #fff;
            span{
              display: none;
            }
          }
        }

        .active a{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;

            text-decoration: none;

            svg{
                position: absolute;
                font-size: 32px;

                background-color: var(--green);
                color: black;

                border-radius: 50%;

                padding: 4px;
                margin-bottom: 85px;
                transform: scale(1.2);

            }


            span{
                display: block;
                color: black;
                text-decoration: none;

                font-size: 14px;

                background-color: var(--green);
                border-radius: 100px;
                padding: 4px 8px;
            }
        }
    }
`
