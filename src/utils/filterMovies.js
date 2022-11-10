export const filterMovies = (movies, category) => {
    const categoryMovies = []

    movies.map(movie => {
      movie.genres.map(genre => genre.name === category ? categoryMovies.push(movie) : false)
    })

    return categoryMovies
}