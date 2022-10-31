import { ListItem } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

export const Logo = styled.h1`
    margin: 2px 0;
    font-family: 'Caveat', cursive;
    font-size: 24px;
`
export const MyLink = styled(Link)`
    display: flex;
    width: 100%;
    text-decoration: none;
    color: inherit;
    &.active{
        border-left: 2px solid red;
    }
`
