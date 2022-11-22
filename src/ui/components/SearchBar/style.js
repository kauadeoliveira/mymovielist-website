import { Backdrop, List } from "@mui/material"
import styled from "styled-components"

export const SearchBarWrapper = styled.div`
    flex-direction: column;
    width: 100%;

    .appbar{
        width: 100%;
        padding: 5px 10px;
        display: flex;
        justify-content: center;
    }

    `

export const MyInputWrapper = styled.div`
    height: 30px;
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

export const MyList = styled(List)`
    background-color: ${({ bgColor }) => bgColor};
    display: ${({ content }) => content ? 'block' : 'none'};
    margin: 0 auto;
`