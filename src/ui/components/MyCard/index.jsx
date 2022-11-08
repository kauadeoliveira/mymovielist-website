import { Button, useTheme } from "@mui/material";
import Link from "next/link";
import { CardRating, CardWrapper, CardContent, CardImage, CardDescription, } from "./style";


export default function MyCard({ img, rating, pathname, description }) {
    const { palette } = useTheme()
    const theme = useTheme()
    console.log(theme)
    return(
    <>
        <CardWrapper href={`/movie/${pathname}`}>
            <CardRating>
                {rating}
            </CardRating>
            <CardContent description={description}>
                <CardImage img={`https://image.tmdb.org/t/p/w500${img}`} description={description}/> 
                <CardDescription description={description}>
                    <span>{description ? description.title : undefined}</span>
                    <span>{description ? description.subTitle : undefined}</span>
                </CardDescription>
            </CardContent>
        </CardWrapper>
    </>
    )
}


