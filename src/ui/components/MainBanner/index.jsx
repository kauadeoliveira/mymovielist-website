import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { GenreButton, MovieInfos, MovieWrapper } from "./style"
export default function MainBanner() {
    const generes = ['Heroes', 'Action', 'Adventure']
    return(
        <MovieWrapper>
            <MovieInfos>
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
                        width: '120px',
                        fontSize: '10px'
                    }}
                 >Watch Trailer</Button>
                
            </MovieInfos>
        </MovieWrapper>
    )
}