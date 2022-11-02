import { Paper } from "@mui/material";
import styled from "styled-components";

export const CardWrapper = styled(Paper)`
    display: grid;
    width: 100px;
    height: 220px;
    border-radius: 10px;

    grid-template-columns: 100%;
    grid-template-rows: 150px 70px;

`

export const CardImage = styled.div`
    grid-row: 1;
    width: 100%;
    height: 100%;
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px 10px 0px 0px;
    `

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    grid-row: 2;
    width: 100%;
    height: 100%;
    padding: 2px 3px;
    p{
        margin: 0;
    }

    p:nth-child(1){
        font-size: .7rem;
    }
    p:nth-child(2){
        font-size: .6rem;
    }

`

