import { useTheme } from "@mui/material";
import Link from "next/link";
import { CardWrapper, ImageCard, TitleCard } from "./style";

export default function MovieCard({ title, img }) {
    const theme = useTheme()
    return(
        <CardWrapper>
            <Link href="a" style={{textDecoration: 'none'}}>
                <ImageCard bgImage={img}/>
                <TitleCard textColor={theme.palette.text.primary}>{title}</TitleCard>
            </Link>
        </CardWrapper>
    )
}