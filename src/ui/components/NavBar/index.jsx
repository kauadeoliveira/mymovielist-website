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
import { MyListItemButton } from "./style"

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
import { searchBarSlice } from "../../../store/slices/searchBarSlice";




export default function NavBar() {

    const [movieIds, setMovieIds] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)
    const [allMovies, setAllMovies] = useState([])
    const [resultsMovies, setResultsMovies] = useState(['No Results'])

    const dispatch = useDispatch()
    const { openNavBar } = useSelector(store => store.navBar)
    const [openCategories, setOpenCategories] = useState(false)
    const theme = useTheme()

    const [height, width] = useWindowSize()

    const { openSearchBar } = useSelector(store => store.searchBarSlice)

    const { searchValue } = useSelector(store => store.searchValueSlice)



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
                setAllMovies(response[0].results.concat(response[1].results))
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

    useEffect(() => {
        if(width > 850 && openNavBar){
            dispatch(navBarSlice.actions.open())
        }

        if(width < 850 && !openNavBar && openSearchBar){
            dispatch(searchBarSlice.actions.open(false))
        }
    }, [width])

    useEffect(() => {
        if(width < 850 && !openNavBar && openSearchBar){
            dispatch(searchBarSlice.actions.open(false))
        }
    }, [openNavBar])

    
    useEffect(() => {
        if(typeof searchValue === "string"){
            const results = allMovies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()));
            if(results.length > 10){
                setResultsMovies(results.slice(0, 10))
            }else{
                setResultsMovies(results)
            }
        }
    }, [searchValue])

 
    return(
        <Collapse in={openNavBar}>
                <Box sx={{backgroundColor: theme.palette.background.paper, height: '100vh', padding: '10px 0'}}>
                    <SearchBar style={{width: '90%', margin: '50px auto 0px auto'}} results={resultsMovies}/>
                    <List sx={{display: openSearchBar ? 'none' : 'block'}}>
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
                        <Collapse in={openCategories}>
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
                        </Collapse>
                    </List>
                </Box>
        </Collapse>
    )
}