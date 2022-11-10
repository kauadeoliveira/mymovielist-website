import { AppBarWrapper, Logo } from "./style";

import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { IconButton, useTheme } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice"
import { themeSlice } from "../../../store/slices/themeSlice"
import NavBar from "../NavBar";
import Image from "next/image";

export default function MyAppBar() {
    const theme = useTheme();

    const dispatch = useDispatch();
    const { openNavBar } = useSelector(store => store.navBar);
    const { darkTheme } = useSelector(store => store.theme);

    const handleOpenMenu = () => dispatch(navBarSlice.actions.open())

    const handleChangeTheme = () => dispatch(themeSlice.actions.changeTheme())    


    return(
        <div>
            <AppBarWrapper 
             style={{backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, .65)'}}>
                <ul className="items-sm">
                    <li>
                        <IconButton size="small" onClick={handleOpenMenu}>
                            {openNavBar ? <CloseSharpIcon fontSize="inherit" /> : <MenuSharpIcon fontSize="inherit"/>}
                        </IconButton>
                    </li>
                    <li>
                        <Link href="/" className="logo">
                            <Image src="/mml-logo.png" width={52} height={16} alt="My Movie List Logo"/>
                        </Link>
                    </li>
                    <li>
                        <IconButton size="small" onClick={handleChangeTheme}> 
                            {darkTheme ? <DarkModeSharpIcon fontSize="inherit"/> : <LightModeSharpIcon fontSize="inherit"/>}
                        </IconButton>
                    </li>
                </ul>
                <ul className="items-lg">
                    <li>
                        <Link href="/">Logo</Link>
                    </li>
                    <li>
                        <Link href="/top-rated">Top Rated</Link>
                    </li>
                    <li>
                        <Link href="/popular">Popular</Link>
                    </li>
                    <li>
                        <Link href="/now-playing">Now Playing</Link>
                    </li>
                    <li>
                        Categories
                    </li>
                    <li>
                        <IconButton size="small">
                            <SearchSharpIcon fontSize="inherit"/>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton size="small">
                            <LightModeSharpIcon fontSize="inherit"/>
                        </IconButton>
                    </li>
                </ul>
            </AppBarWrapper>
            <NavBar />
        </div>
    )
}