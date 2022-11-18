import { Container } from "@mui/system";
import styled from "styled-components";

export const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);


    @media(min-width: 610px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media(min-width: 765px){
        grid-template-columns: repeat(5, 1fr);
    }

    @media(min-width: 920px){
        grid-template-columns: repeat(7, 1fr);
    }

    @media(min-width: 1075px){
        grid-template-columns: repeat(8, 1fr);
    }

    @media(min-width: 1230px){
        grid-template-columns: repeat(9, 1fr);
    }
`
export const MyContainer = styled.div`
    display: ${({ noDisplay }) => noDisplay ? 'none' : 'flex'};
    flex-direction: column;
    margin: 50px 0px 0px 0px;
    padding: 0 10px;
`

export const TitlePage = styled.h1`
    margin: 0;
    font-size: 1rem;
`