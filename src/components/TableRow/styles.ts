import { styled } from "styled-components";


export const Container = styled.tr`
      cursor: pointer;
      td{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 8px;

        padding: 16px;
        font-size: 14px;

        span{
          width: 100%;
          border-radius:100px;
          padding: 4px 8px;
          text-align: center;
        }

        span:nth-child(1){
          background: rgba(182, 235, 12,0.4);
          color: #b6eb0c;
          border: 1px solid #b6eb0c;
        }
        span:nth-child(2){
          background: rgba(235, 59, 35,0.4);
          color: #eb3b23;
          border: 1px solid #eb3b23;
        }
        span:nth-child(3){
          background: rgba(238, 216, 71,0.4);
          color: #eed847;
          border: 1px solid #eed847;
        }
      }
      td.game{
        justify-content: left;
        flex-direction: row;

        gap: 16px;

        h3{
          font-size: 16px;
        }
      }
      img{
        width: 120px;
        height: auto;

        border-radius: 10px;
      }

      @media only screen and (max-width: 640px) {
        td{
          font-size:12px;
          gap: 4px;
        }
        img{
          width:100px;
        }
      }

`
