import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const moviesFilterByGenreService = {
    getAll: (numberPage, query)=> apiService.get(urls.movies.byGenre(numberPage, query))
}
export {moviesFilterByGenreService}