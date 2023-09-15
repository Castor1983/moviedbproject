import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const moviesListService = {
    getAll: ()=> apiService.get(urls.movies.byPageNumber())
}
export {moviesListService}