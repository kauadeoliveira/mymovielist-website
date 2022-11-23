import { MyFooterContent, MyFooterWrapper } from "./style";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Divider, IconButton, useTheme } from "@mui/material";
import Link from "next/link";
import MyLogo from "../MyAppBar/MyLogo";
import { useEffect, useState } from "react";

export default function MyFooter() {
    const theme = useTheme()
    const [backToTop, setBackToTop] = useState(false)

    const handleBackToTop = () => setBackToTop(true)

    useEffect(() => {
        if(backToTop){
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }
    }, [backToTop])
    return(
        <>
            <MyFooterWrapper>
            <Divider />
            <MyFooterContent colorPrimary={theme.palette.text.primary}>
                <ul className="socials" >
                    <li>
                        <Link href="https://www.linkedin.com/in/kauadeoliveira/">
                            <LinkedInIcon fontSize="inherit"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/kauadeoliveira">
                            <GitHubIcon fontSize="inherit"/>
                        </Link>
                    </li>
                </ul>
                <span>by Kauã de Oliveira Lopes</span>
                <IconButton sx={{fontSize: 'inherit'}} onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                }}>
                    <ArrowCircleUpIcon fontSize="inherit"/>
                </IconButton>
            </MyFooterContent>
            </MyFooterWrapper>
        </>
    )
}