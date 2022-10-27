import Link from "next/link";
import { CardWrapper, ImageCard, TitleCard } from "./style";

export default function MovieCard({ title, img }) {
    return(
        <CardWrapper>
            <Link href="a">
                <a style={{textDecoration: 'none'}}>
                <ImageCard bgImage={img}/>
                <TitleCard>{title}</TitleCard>
                </a>
            </Link>
        </CardWrapper>
    )
}