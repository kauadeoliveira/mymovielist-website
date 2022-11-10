import { allCategories } from "../../utils/allCategories";
import { apiKey } from "../../utils/apiKey";
import { filterMovies } from "../../utils/filterMovies";

export async function getStaticProps(context) {
    const { categoryId } = context.params
    const response = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      ).then(response => response.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      ).then(response => response.json()),
  ]);
    
    
    const [popularMovies, topMovies] = response;
    
    const datas = popularMovies.results.concat(topMovies.results)
  
    const movieIds = datas.map(movie => movie.id)
  
    const urlAllMovies = movieIds.map(id => {
      return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    })
  
    const responseAllMovies = await Promise.all(
      urlAllMovies.map((url) => {
          return fetch(url).then(response => response.json())
      })
    )
  
    const arrayAllMovies = responseAllMovies;


    return { props: { categoryId } }
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
        
        
    const [popularMovies, topMovies] = response;
    
    const datas = popularMovies.results.concat(topMovies.results)
    
    const movieIds = datas.map(movie => movie.id)
    
    const urlAllMovies = movieIds.map(id => {
        return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    })
    
    const responseAllMovies = await Promise.all(
        urlAllMovies.map((url) => {
            return fetch(url).then(response => response.json())
        })
    )
    
    const arrayAllMovies = responseAllMovies;

    

    const paths = allCategories(arrayAllMovies).map(category => {
        return{
            params: {
                categoryId: category
            }
        }
    })

    return { paths, fallback: false }

}


export default function Category({ categoryId }) {
    return(
        <h1>{categoryId}</h1>
    )
}