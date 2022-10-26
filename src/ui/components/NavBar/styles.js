import { ToggleButtonGroup } from "@mui/material";
import styled from "styled-components";


export const ToggleThemes = styled(ToggleButtonGroup)`
    display: flex;
    border: 1px solid black;
    justify-content: center;
    border-radius: 8px;
    align-items: center;
    margin: auto;
    width: 160px;
    height: 20px;
    padding: 15px;

    button{
        height: 20px;
        border: none;
        width: 75px;
        margin: 0;
        border-radius: 8px;
    }
`