import { styled } from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    
    .Main{
        max-width: 500px;
        width: 375px;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 50px auto;

        padding: 0px 20px;
        
        h1{
            text-align: center;
        }
        img{
            width: 256px;
            height: 256px;
        }

        .checkboxWrapper{
            display: flex;
            align-items: center;
            gap: 10px;

            a{
                color: var(--green)
            }
        }

        button{
            margin: 15px 0;
        }
        
        p{
            margin-top: 20px;
            a{
                color: var(--green)
            }
        }
    }



`