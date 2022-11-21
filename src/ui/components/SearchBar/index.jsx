// Material UI imports
import { 
    Backdrop,
    IconButton, 
    InputBase, 
    List, 
    ListItemButton, 
    useTheme
} from "@mui/material";

// Icons
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

// Components styled imports
import { 
    CloseIconWrapper,
    MyBackdrop,
    MyBackdropContent,
    MySearchBar,
    SearchBarWrapper,
    SearchIconWrapper,
    SearchInput,
    SearchResults,
    SearchWrapper
} from "./style"
import { useDispatch, useSelector } from "react-redux";
import { searchValueSlice } from "../../../store/slices/searchValueSlice";
import { useEffect, useRef, useState } from "react";
import { searchBarSlice } from "../../../store/slices/searchBarSlice";
import { useWindowSize } from "../../../utils/hooks/useWindowSize";
import MyInputSearchBar from "./MyInputSearchBar";


export default function SearchBar({ results, style }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [height, width] = useWindowSize()
    const [documentDOM, setDocumentDOM] = useState()

    const { searchValue } = useSelector(store => store.searchValueSlice)
    const { openSearchBar } = useSelector(store => store.searchBarSlice)

    useEffect(() => {
        window.document.body.style.overflow = openSearchBar ? 'hidden' : 'auto'
    }, [openSearchBar])

    useEffect(() => console.log(results), [searchValue])

    if(width > 850){
        return(
            <MyBackdrop open={true}>
                <SearchBarWrapper style={style}>
                    <MyInputSearchBar />
                    <ul className="list-results-lg" style={{backgroundColor: theme.palette.background.paper}}>
                            {results.map(movie => {
                                return(
                                    <li key={movie.id} href={`/movie/${movie.id}`}>{movie.title}</li>
                                )
                            })}
                    </ul>
                </SearchBarWrapper>
            </MyBackdrop>
        )
    }else{
        return(
            <SearchBarWrapper style={style}>
                <MyInputSearchBar />
                <List sx={{display: openSearchBar ? 'block' : 'none', overflow: 'scroll'}}>
                    {results ? (
                        results.map(movie => {
                            return(
                                <ListItemButton key={movie.id} href={`/movie/${movie.id}`}>{movie.title}</ListItemButton>
                            )
                        })
                    )
                    :
                    (
                        <ListItemButton>Nenhum Resultado...</ListItemButton>
                    )}
                </List>
            </SearchBarWrapper>
        )
    }

}