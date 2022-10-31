import { apiKey } from "../../utils/apiKey"

export async function getStaticProps(context) {
    const {params} = context
    const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey}&language=en-US`)
    const details = await detailsResponse.json()

    return{
        props: { details, params }
    }
}

export async function getStaticPaths() {
    const response = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
          ).then(response => response.json()),
        fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
          ).then(response => response.json()),
    ]);

    const [popularMovies, topMovies] = await response;

    const allMovies = popularMovies.results.concat(topMovies.results);
    const paths = allMovies.map(movie => {
        return {
            params: {
                movieId: `${movie.id}`
            }
        }
    })

    return { paths, fallback: false }
}

export default function Movie({ details, params }) {
    return(
        <h1>Movie: {params.movieId}</h1>
    )
}