import { Button } from "@mui/material";
import styled from "styled-components";

export const MainBannerWrapper = styled.div`
    margin: 20px 0;
    background-color: #000;
    background-image: url('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg');
    background-repeat: no-repeat;
    background-attachment: initial;
    background-size: cover;
    height: 200px;
    border-radius: 20px;
    display: flex;
    align-content: flex-end;
    padding: 10px;

`

export const MainBannerInfos = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    color: #fff;
    padding: 0 10px;

    h2, p{
        margin: .5rem 0;
    }

    h2{
        font-size: 1.3rem
    }

    p{
        font-size: 0.7rem
    }

    .genres{
        display: flex;
        gap: 4px;
    }
`

export const GenreButton = styled.div`
    font-size: .4rem;
    background: none;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 2px 4px;
    color: #fff;
`