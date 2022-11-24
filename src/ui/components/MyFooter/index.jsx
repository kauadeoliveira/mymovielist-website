import { MyFooterContent, MyFooterWrapper } from "./style";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Divider, IconButton, useTheme } from "@mui/material";
import Link from "next/link";
import MyLogo from "../MyAppBar/MyLogo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function MyFooter() {
    const theme = useTheme()

    const { openNavBar } = useSelector(store => store.navBar)

    return(
        <>
            <MyFooterWrapper style={{display: openNavBar ? 'none' : 'block'}}>
            <Divider />
            <MyFooterContent colorPrimary={theme.palette.text.primary}>
                <div className="right-column">
                    
                    <ul className="socials" >
                        <li>
                            <Link href="https://www.linkedin.com/in/kauadeoliveira/">
                                <LinkedInIcon fontSize="inherit"/>
                                <span>/kauadeoliveira</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/kauadeoliveira">
                                <GitHubIcon fontSize="inherit"/>
                                <span>/kauadeoliveira</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <IconButton 
                 onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                 }}
                >
                    <ArrowCircleUpIcon fontSize="inherit"/>
                </IconButton>
            </MyFooterContent>
            </MyFooterWrapper>
        </>
    )
}