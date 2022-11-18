import { Backdrop } from "@mui/material"
import styled from "styled-components"

export const SearchBarWrapper = styled.div`
    flex-direction: column;

    `

export const MyInputWrapper = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    border: 1px solid ${({textPrimaryColor}) => textPrimaryColor};
    color: ${({textPrimaryColor}) => textPrimaryColor};
    
    .search-icon, .close-icon{
        font-size: 1rem;
        display: flex;
        align-items: center;    
        padding: 0 5px;    
    }

    .close-icon{
        svg{
            cursor: pointer;
        }
    }

    input{
        color: ${({textPrimaryColor}) => textPrimaryColor};
        width: 100%;
        outline: none;
        border: 0;
        background: none;
    }

`

export const SearchResults = styled.div`
    width: 100%;
    display: ${({showResults}) => showResults ? 'block' : 'none'};
`

export const MyBackdrop = styled(Backdrop)`
    align-items: flex-start;
    height: 100vh;
`

export const MyBackdropContent = styled.div`
    width: 100%;
    height: 50%;
    background-color: red;
`