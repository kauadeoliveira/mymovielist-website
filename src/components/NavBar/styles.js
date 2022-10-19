import { Box } from "@mui/system";
import styled from "styled-components";

export const ModalContent = styled(Box)`
    width: 100%;
    height: 100%;
`

export const Search = styled.div`
    display: flex;
    margin: auto;
    width: 300px;
    padding: 5px 0;
    height: 30px;
    background-color: #000;
    border-radius: 5px;

    input{
        width: 100%;
        border-radius: 5px;
        outline: none;
        border: none;
        background-color: transparent;
    }
`

export const SearchIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    padding: 5px;
    height: 100%;
    vertical-align: center;
`