// Material UI imports
import { 
    IconButton, 
    InputBase, 
    useTheme
} from "@mui/material";

// Icons
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

// Components styled imports
import { 
    CloseIconWrapper,
    SearchIconWrapper,
    SearchInput,
    SearchWrapper
} from "./style"


export default function SearchBar({ style, closeIcon }) {
    const theme = useTheme()
    return(
        <SearchWrapper bdColor={theme.palette.text.primary} style={style}>
            <SearchIconWrapper sx={{color: theme.palette.text.primary}}>
                <SearchSharpIcon fontSize="small"/>
            </SearchIconWrapper>
            <SearchInput placeholder="Search"/>
            <CloseIconWrapper closeIcon={closeIcon} onClick={closeIcon}>
                <CloseSharpIcon fontSize="inherit"/>
            </CloseIconWrapper>
        </SearchWrapper>
    )
}