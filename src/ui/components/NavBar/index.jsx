// Material UI Imports
import { 
    Backdrop,
    Box,
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Skeleton,
    Slide,
    Toolbar,
    useTheme
} from "@mui/material";

// Style and MyComponents
import SearchBar from "../SearchBar";
import { MyCollapse, MyListItemButton } from "./style"

// Icons
import StarsSharpIcon from '@mui/icons-material/StarsSharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';

// React Imports
import { useState, useEffect } from "react";

// Redux and store imports
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice"
import { store } from "../../../store/store"

// Utils
import { apiKey } from "../../../utils/apiKey";
import { allCategories } from "../../../utils/functions/allCategories";
import { toCapitalize } from "../../../utils/functions/toCapitalize";
import { useWindowSize } from "../../../utils/hooks/useWindowSize";




export default function NavBar() {

    const [movieIds, setMovieIds] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const openNav = useSelector(store => store.navBar.openNavBar)
    const [openCategories, setOpenCategories] = useState(false)
    const theme = useTheme()

    const [height, width] = useWindowSize()

    useEffect(() => {
        async function getData(){
            const responseAllMovies = await Promise.all([
                fetch(
                  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
                  ).then(response => response.json()),
                fetch(
                  `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
                  ).then(response => response.json()),
            ]).then(response => {
                const allMovies = response[0].results.concat(response[1].results);
                setMovieIds(allMovies.map(movie => movie.id))
            });
    
            const urlAllMovies = movieIds.map(id => {
                return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
            })
    
            const responseDetails = await Promise.all(urlAllMovies.map(async url => {
                const response = await fetch(url);
                return await response.json();
            })).then(response => {
    
                setCategories(allCategories(response))
            })
        
            setLoading(false)
        }
        getData()
    })

    const handleClick = () => {
        setOpenCategories(!openCategories)
    }


    return(
        <MyCollapse in={openNav}>
                <Box sx={{backgroundColor: theme.palette.background.paper, height: '100vh', padding: '10px 0'}}>
                    <SearchBar style={{margin:'50px auto 10px auto', width: '90%'}} />
                    <List>
                        <MyListItemButton href="/top-rated">
                            <span><OndemandVideoSharpIcon fontSize="inherit" color="primary"/></span>
                            <span>Top Rated</span>
                        </MyListItemButton>
                        <MyListItemButton href="/popular">
                            <span><WhatshotSharpIcon fontSize="inherit" color="primary"/></span>
                            <span>Popular</span>
                        </MyListItemButton>
                        <MyListItemButton href="/now-playing">
                            <span><StarsSharpIcon fontSize="inherit" color="primary"/></span>
                            <span>Now Playing</span>
                        </MyListItemButton>
                        <MyListItemButton onClick={handleClick}>
                            <span><ListSharpIcon fontSize="inherit" color="primary"/></span>
                            <span>Categories</span>
                            <span><ExpandMoreSharpIcon fontSize="inherit"/></span>
                        </MyListItemButton>
                        <MyCollapse in={openCategories}>
                            <List>
                                {loading ? (
                                    <>
                                        <Skeleton />
                                        <Skeleton />
                                        <Skeleton />
                                    </>
                                ) : (
                                    categories.map(category => {
                                        return(
                                            <ListItem key={category} sx={{fontSize: '.8rem'}}>
                                                <ListItemButton href={`/category/${category}`}>
                                                    {toCapitalize(category)}
                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    })
                                )}
                            </List>
                        </MyCollapse>
                    </List>
                </Box>
        </MyCollapse>
    )
}