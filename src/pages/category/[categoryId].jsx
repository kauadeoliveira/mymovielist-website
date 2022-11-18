import { useSelector } from "react-redux";
import MyCard from "../../ui/components/MyCard";
import { allCategories } from "../../utils/functions/allCategories";
import { apiKey } from "../../utils/apiKey";
import { filterMovies } from "../../utils/functions/filterMovies";
import { toCapitalize } from "../../utils/functions/toCapitalize";
import { Movies, MyContainer, TitlePage } from "../style";

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


    return { props: { categoryId, arrayAllMovies } }
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
        urlAllMovies.map(async (url) => {
            const response = await fetch(url);
            return await response.json();
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


export default function Category({ categoryId, arrayAllMovies }) {
    const movies = filterMovies(arrayAllMovies, categoryId)
    const { openNavBar } = useSelector(store => store.navBar)
    return(
        <MyContainer noDisplay={openNavBar}>
            <TitlePage>{toCapitalize(categoryId)} Movies</TitlePage>
            <Movies>
                {movies.map(movie => {
                    return(
                    <MyCard
                     key={movie.id}
                     rating={movie.vote_average}
                     img={movie.poster_path}
                     pathname={movie.id}
                    />
                    )
                })}
            </Movies>
        </MyContainer>
    )
}