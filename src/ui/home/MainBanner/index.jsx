import { BannerButton, BannerContent, BannerWrapper } from "./style"

export default function MainBanner({ img, pathname, description }) {
    return(
        <BannerWrapper img={`https://image.tmdb.org/t/p/w500${img}`}>
            <BannerContent>
                <h2>{description.title}</h2>
                <BannerButton variant="contained" href={`/movie/${pathname}`}>See about</BannerButton>
            </BannerContent>
        </BannerWrapper>
    )
}