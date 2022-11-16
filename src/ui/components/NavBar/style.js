import { Backdrop, Collapse, ListItemButton } from "@mui/material";
import styled from "styled-components";


export const MyCollapse = styled(Collapse)`
    display: block;
`

export const SearchWrapper = styled.div`
    position: relative;
    border: 1px solid ${({ bdColor }) => bdColor};
    display: flex;
    align-items: center;
    border-radius: 4px;
    width: 90%;
    margin: 50px auto 10px auto;
    `

export const SearchIconWrapper = styled.div`
    height: 100%;
    display: flex;
    padding: 2px;
    padding-left: 5px;
    align-items: center;
    justify-content: center;
`

export const SearchInput = styled.input`
    color: inherit;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 0px 4px 4px 0;
    background: none;
`
export const MyListItemButton = styled(ListItemButton)`
    gap: 5px;
    span{
        display: flex;
        align-items: center;
        font-size: .9rem;
    }
    span:nth-child(1){
        font-size: 1rem;
    }
`