import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const moviesListService = {
    getAll: (page)=> apiService.get(urls.movies.byPageNumber(page))
}
export {moviesListService}