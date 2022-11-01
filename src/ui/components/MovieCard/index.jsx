import { useTheme } from "@mui/material";
import Link from "next/link";
import { CardWrapper, ImageCard, RatingLabel, TitleCard } from "./style";

export default function MovieCard({ title, poster, rating, pathname}) {
    const theme = useTheme()
    return(
    <Link href={`/movie/${pathname}`} style={{textDecoration: 'none'}}>
        <RatingLabel>
            {rating}
        </RatingLabel>
        <CardWrapper>
            <ImageCard poster={poster}/>
            <TitleCard textColor={theme.palette.text.primary}>{title}</TitleCard>
        </CardWrapper>
    </Link>
    )
}