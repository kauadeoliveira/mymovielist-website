import styled from "styled-components";

import { Paper } from "@mui/material";
import Link from "next/link";

export const CardWrapper = styled(Link)`
    text-decoration: none;
    transition: all 0.6s 0s ease;
    
    &:hover{
        scale: calc(1.1);
    }
`

export const CardRating = styled.div`
    width: 30px;
    color: #fff;
    border-radius: 5px;
    font-size: .7rem;
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: 8px;
    z-index: 1;
`

export  const CardContent = styled(Paper)`
    width: ${({description}) => description ? '100px' : '115px'};
    height: ${({description}) => description ? '220px' : '172.5px'};
    display: ${({description}) => description ? 'grid' : 'block'};
    grid-template-rows: 150px 70px;
    border-radius: 10px;
`

export const CardImage = styled.div`
    grid-row: 1;
    width: 100%;
    height: 100%;
    background-color: black;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: ${({description}) => description ? '10px 10px 0px 0px' : '0'};
`

export const CardDescription = styled.div`
    display: ${({description}) => description ? 'flex' : 'none'};
    width: 100%;
    height: 100%;
    padding: 3px;
    grid-row: 2;
    flex-direction: column;
    span:nth-child(1){
        font-size: .7rem;
    }
    span:nth-child(2){
        font-size: .5rem;
    }
`
