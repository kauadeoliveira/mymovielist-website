import { Paper } from "@mui/material";
import styled from "styled-components";

export const Details = styled.section`
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 150px / 1fr;
    gap: 5px;
`

export  const Poster = styled(Paper)`
    height: 225px;
    width: 150px;
    grid-column: 1;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Description = styled.div`
    grid-column: 2;
    width: 100%;
    height: 100%;
`

export const TitleDescription = styled.div`
    display: flex;
    flex-direction: column;
    .movie-title{
        display: flex;
        gap: 5px;
        margin: 0;
        font-size: 1rem; 
        flex-wrap: wrap;
    }

    .advanced-details{
        display: flex;
        align-items: center;
        font-size: .5rem;
        span:not(:first-child)::before{
            content: '•';
            margin: 0 3px;
        }

        .rating{
            display: flex;
            align-items: center;
            gap: 1px;

            p{
                margin: 0;
            }
        }

        .genres{
            display: flex;
            a:not(:last-child)::after{
                margin-right: 3px;
                content: ',';
            }
            a{
                color: inherit;
                text-decoration: none;
            }
            a:hover{
                text-decoration: underline
            }
        }
    }
`

export const OverviewDescription = styled.div`
    p{
        font-size: .65rem;
    }
    span{
        margin-right: 5px;
        font-weight: bold;
    }
    ul.directors{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;

        li:not(:last-child)::after{
            content: ',';
            margin-right: 3px;
        }
    }
    
    span, ul{
        font-size: .6rem;
    }
`

export const Cast = styled.div`
    width: 100%;
    height: 30vh;
    h2{
        margin: 0;
        padding: 0 10px;
        font-size: 1rem;
    }
    
    .swiper{
        padding: 10px;
    }
`
