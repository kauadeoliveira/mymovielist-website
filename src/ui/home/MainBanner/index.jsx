import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { GenreButton, MainBannerInfos, MainBannerWrapper} from "./style"
export default function MainBanner() {
    const generes = ['Heroes', 'Action', 'Adventure']
    return(
        <MainBannerWrapper>
            <MainBannerInfos>
                <h2>Spider-Man</h2>
                <div className="genres">
                    {generes.map((genrer, index) => {
                        return(
                            <GenreButton
                             key={index}
                              variant="outlined"
                            >
                                {genrer}
                            </GenreButton>
                        )
                    })}
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, eum.</p>
                <Button
                    variant="contained"
                    sx={{
                        width: '100px',
                        fontSize: '10px'
                    }}
                 >
                    See More
                 </Button>
            </MainBannerInfos>
        </MainBannerWrapper>
    )
}