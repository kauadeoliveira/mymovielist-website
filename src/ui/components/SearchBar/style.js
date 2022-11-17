import styled from "styled-components"

export const SearchBarWrapper = styled.div`
    display: flex;
    margin-top: 60px;
    width: 100%;
    flex-direction: column;
    `

export const MySearchBar = styled.div`
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