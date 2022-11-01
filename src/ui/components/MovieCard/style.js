import { Paper } from "@mui/material";
import styled from "styled-components";

export const ImageCard = styled.div`
    background-color: black;
    background-image: url(${({ poster }) => poster});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 150px;
    border-radius: 10px 10px 0 0;
`

export const TitleCard = styled.p`
    font-weight: bold;
    font-size: .6rem;
    margin: 2px 0;
    word-wrap: break-word;
    color: ${({textColor }) => textColor};
    padding: 0 5px
`

export const CardWrapper = styled(Paper)`
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    flex-flow: column-wrap;
    width: 100px;
    height: 200px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .5);
    a{
        width: inherit;
        height: inherit;
    }
`

export const RatingLabel = styled.div`
    width: 40px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: #fcaf21;
    position: relative;
    margin: auto;
    top: 10px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
`
