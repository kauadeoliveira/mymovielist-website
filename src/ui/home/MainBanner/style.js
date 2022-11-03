import { Button, Paper } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";



export const BannerWrapper = styled(Paper)`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-repeat: no-repeat;
    background-position: left top;
    margin: 10px 0;
`

export const BannerContent = styled.div`
    color: white;
    width: 60%;
    height: 100%;
    padding: 5px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        margin: 0;
        font-size: 2rem;
    }

`

export const BannerButton = styled(Button)`
    width: 100px;
    font-size: .6rem;
`