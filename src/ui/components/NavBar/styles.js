import { Backdrop } from "@mui/material";
import styled from "styled-components";


export const SearchWrapper = styled.div`
    position: relative;
    border: 1px solid ${({ bdColor }) => bdColor};
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 4px;
    width: 90%;
    margin: 10px auto;
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
