import { AppBarWrapper } from "./style";

import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice"

export default function MyAppBar() {
    const dispatch = useDispatch();
    const handleOpenMenu = () => dispatch(navBarSlice.actions.open())
    console.log(navBarSlice.actions.open())

    return(
        <AppBarWrapper>
            <ul className="items-sm">
                <li>
                    <IconButton size="small" onClick={handleOpenMenu}>
                        <MenuSharpIcon fontSize="inherit"/>
                    </IconButton>
                </li>

                <li>
                    <Link href="/">Logo</Link>
                </li>

                <li>
                    <IconButton size="small">
                        <LightModeSharpIcon fontSize="inherit"/>
                    </IconButton>
                </li>
            </ul>

            <ul className="items-lg">
                <li>
                    <Link href="/">Logo</Link>
                </li>
                <li>
                    <Link href="#">Top Rated</Link>
                </li>
                <li>
                    <Link href="#">Popular</Link>
                </li>
                <li>
                    <Link href="#">Now Playing</Link>
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
    )
}