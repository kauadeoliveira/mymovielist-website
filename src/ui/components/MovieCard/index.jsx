import Link from "next/link";
import { ImageCard, TitleCard } from "./style";

export default function MovieCard({ title, img }) {
    return(
        <Link href="a">
            <a style={{textDecoration: 'none'}}>
                <ImageCard bgImage={img}/>
                <TitleCard>{title}</TitleCard>
            </a>
        </Link>
    )
}