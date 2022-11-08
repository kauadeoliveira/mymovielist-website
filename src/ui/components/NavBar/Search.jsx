// Material UI imports
import { InputBase, useTheme } from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

// Components styled imports
import { SearchIconWrapper, SearchInput, SearchWrapper } from "./styles"


export default function Search() {
    const theme = useTheme()
    return(
        <SearchWrapper bdColor={theme.palette.text.primary}>
            <SearchIconWrapper sx={{color: theme.palette.text.primary}}>
                <SearchSharpIcon fontSize="small"/>
            </SearchIconWrapper>
            <SearchInput placeholder="Search"/>
        </SearchWrapper>
    )
}