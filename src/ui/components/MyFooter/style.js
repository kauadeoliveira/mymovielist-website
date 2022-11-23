import styled from "styled-components";

export const MyFooterWrapper = styled.footer`
    width: 100%;
    margin-top: 40px;
    padding: 10px;
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
        gap: 5px;
        margin: 0;
        margin-block: 0;
        
        li{
            font-size: 1.2rem;
        }
        
        a{
            color: ${({ colorPrimary }) => colorPrimary};
            text-decoration: none;
        }
    }

    span{
        font-size: .7rem;
    }
`