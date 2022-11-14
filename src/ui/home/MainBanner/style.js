import { Button, Paper } from "@mui/material";

import styled from "styled-components";



export const BannerWrapper = styled(Paper)`
    width: 95vw;
    height: 30vh;
    background-image: url(${({img}) => img});
    background-repeat: no-repeat;
    margin: 0px auto 20px auto;
    background-size: cover;
    border-radius: 10px;
    background-position: left top;


    @media(min-width: 768px){
        height: 70vh;
    }

    @media(min-width: 920px){
        height: 80vh;
    }
`

export const BannerContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 50%;
    left: 10px;

    h2{
        margin: 0;
        font-size: 1.5rem;
    }

    @media(min-width: 768px){
        left: 20px;

        h2{
            font-size: 3rem;
        }
    }

`

export const BannerButton = styled(Button)`
    width: 100px;
    font-size: .6rem;
`