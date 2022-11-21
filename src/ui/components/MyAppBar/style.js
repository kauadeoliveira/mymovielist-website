import { Collapse } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

export const AppBarWrapper = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1000;
    height: 40px;
    top: 0;
    justify-content: center;
    width: 100%;
    padding: 5px 10px;
    backdrop-filter: saturate(180%) blur(20px);
    font-size: .8rem;
    line-height: 28px;

    a{
        text-decoration: none;
    }
    ul{
        padding: 0;
        gap: 30px;
        margin: 0;
        list-style: none;
    }
    ul.items-lg{
        justify-content: space-around;
        align-items: center;


        a, li{
            cursor: pointer;
            color: ${({colorText}) => colorText};
            font-weight: bold;
        }
    }
    ul.items-sm{
        display: none;
    }

    .search{
        display: flex;
        width: 50%;
    }

    @media (max-width: 850px){
        display: flex;

        ul.items-sm{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            padding: 0;
            margin: 0;

            img{
                display: block;
            }
        }

        ul.items-lg{
            display: none !important;
        }
        .search{
            display: none
        }
    }
`

export const MyLogoWrapper = styled(Link)`
    display: flex;
    gap: 2px;
    div{
        color: #fff;
        font-size: 1rem;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-weight: bold;
        background-color: #ad1457;
    }
`

export const MyCollapse = styled(Collapse)`
    display: none;
    @media(min-width: 850px){
        display: flex;
    }
`