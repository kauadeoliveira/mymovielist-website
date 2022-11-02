import { useTheme } from "@mui/material";
import Link from "next/link";
import { CardDescription, CardImage, CardWrapper } from "./style"

export default function MyCard({ title, img, rating, pathname, subTitle}) {
    const { palette } = useTheme()
    return(
    <Link href={`/movie/${pathname}`} style={{textDecoration: 'none'}}>
        <CardWrapper>
            <CardImage style={{backgroundImage: `url(${img})`}}/>
            <CardDescription>
                <p style={{color: palette.text.primary}}>
                    {title}
                </p>
                <p style={{color: palette.text.disabled, display: `${subTitle ? 'block' : 'none'}`}}>
                    {subTitle}
                </p>
            </CardDescription>
        </CardWrapper>
    </Link>
    )
}