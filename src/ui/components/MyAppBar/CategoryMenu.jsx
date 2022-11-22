import { IconButton, List, ListItemButton, Slide, useTheme } from "@mui/material";
import { AppBarWrapper, CategoryMenuWrapper, MyBackdrop } from "./style";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import { useEffect } from "react";
import { toCapitalize } from "../../../utils/functions/toCapitalize";


export function CategoryMenu({ open, categories, onClose }) {

    const theme = useTheme()
    return(
        <Slide
        direction="right" 
        mountOnEnter 
        unmountOnExit 
        in={open}
       >
           <MyBackdrop>
                <CategoryMenuWrapper style={{backgroundColor: theme.palette.background.paper}}>
                    <div className="toolbar">
                        <IconButton onClick={onClose}>
                            <KeyboardBackspaceSharpIcon />
                        </IconButton>
                        <span>Categories</span>
                    </div>
                    <List>
                        {categories.map((category) => {
                            return(
                                <ListItemButton key={category} href={`/category/${category}`}>
                                    {toCapitalize(category)}
                                </ListItemButton>
                            )
                        })}
                    </List>
                </CategoryMenuWrapper>
           </MyBackdrop>
       </Slide>
    )
}