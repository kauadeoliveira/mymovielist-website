import { MyFooterContent, MyFooterWrapper } from "./style";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Divider, IconButton, useTheme } from "@mui/material";
import Link from "next/link";
import MyLogo from "../MyAppBar/MyLogo";

export default function MyFooter() {
    const theme = useTheme()
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
                <IconButton sx={{fontSize: 'inherit'}}>
                    <ArrowCircleUpIcon fontSize="inherit"/>
                </IconButton>
            </MyFooterContent>
            </MyFooterWrapper>
        </>
    )
}