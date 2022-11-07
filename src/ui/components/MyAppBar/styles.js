import { Button, IconButton, Toolbar } from "@mui/material";
import styled from "styled-components";

export const MyToolbar = styled(Toolbar)`
    justify-content: space-between;

    .pages, .settings{
        display: flex;
    }
`

export const MyLogo = styled.a`
    color: #fff;
    text-decoration: none;
`

export const MyButton = styled(Button)`
    font-size: .75rem;
    padding: 2px 4px;
`

export const MyIconButton = styled(IconButton)`
    font-size: 1.2rem;
`