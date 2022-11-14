import Image from "next/image"
import { BannerButton, BannerContent, BannerWrapper } from "./style"

export default function MainBanner({ img, pathname, title }) {
    console.log(img)
    return(
        <>
            <BannerWrapper img={`https://image.tmdb.org/t/p/w1280${img}`}>
                <BannerContent>
                    <h2>{title}</h2>
                    <BannerButton variant="contained" href={`/movie/${pathname}`} color="primary">See about</BannerButton>
                </BannerContent>
            </BannerWrapper>
        </>
    )
}