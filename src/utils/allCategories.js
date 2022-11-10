export const allCategories = (movies) => {
    const categories = []

    movies.map(movie => {
      movie.genres.map(genre => {
        !categories.includes(genre.name.toLowerCase()) ? categories.push(genre.name.toLowerCase()) : false
      })
    })
    
    return categories
}