import { InputBase, useTheme } from "@mui/material";
import { SearchIconWrapper, SearchInput, SearchWrapper } from "./styles";

import SearchSharpIcon from '@mui/icons-material/SearchSharp';

export default function Search() {
    const theme = useTheme()
    console.log(theme)
    return(
        <SearchWrapper bdColor={theme.palette.text.primary}>
            <SearchIconWrapper sx={{color: theme.palette.text.primary}}>
                <SearchSharpIcon fontSize="small"/>
            </SearchIconWrapper>
            <SearchInput placeholder="Search"/>
        </SearchWrapper>
    )
}