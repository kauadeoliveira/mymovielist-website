// Material UI imports
import { 
    AppBar,
    Avatar,
    Box,
    IconButton,
    Link,
    Toolbar,
    Typography
} from "@mui/material";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

// Redux and Store imports
import { 
    useDispatch,
    useSelector
} from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice";
import { themeSlice } from "../../../store/slices/themeSlice";


// React Imports
import NavBar from "../NavBar";

// My Component Function
export default function HeaderAppBar() {
    const dispatch = useDispatch();
    const openNav = useSelector(store => store.navBar.openNavBar);
    const themeState = useSelector(store => store.theme.darkTheme);

    const handleOpenNavBar = () => {
        dispatch(navBarSlice.actions.open())
    }

    const handleToggleTheme = () => {
        dispatch(themeSlice.actions.changeTheme())
    }
    return(
        <AppBar position="sticky">
            <Toolbar sx={{justifyContent: 'space-between'}}>
                    <IconButton
                     size="large"
                     edge="start"
                     aria-label="menu"
                     onClick={handleOpenNavBar}
                    >
                        {openNav ? <CloseSharpIcon /> : <MenuSharpIcon />}
                    </IconButton>
                    <NavBar />
                    <Link href="/">M M L</Link>
                <IconButton onClick={handleToggleTheme}>
                    {themeState ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}