import styled from "styled-components";

export const MyFooterWrapper = styled.footer`
    width: 100%;
    margin-top: 40px;
    padding: 10px;
    z-index: 1;
    position: relative;
    bottom: 0;
`

export const MyFooterContent = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    font-size: 1.2rem;

    .socials{
        display: flex;
        list-style: none;
        gap: 8px;
        margin: 0;
        margin-block: 0;

        
        li{
            font-size: 1.2rem;

        span{
            font-size: .95rem;
        }
        }
        
        a{
            display: flex;
            align-items: center;
            color: ${({ colorPrimary }) => colorPrimary};
            text-decoration: none;
        }
    }

    button{
        font-size: 1.2rem;
    }

`