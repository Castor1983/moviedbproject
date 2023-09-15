import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const movieInfoService = {
    getAll: (id)=> apiService.get(urls.movie.byId(id ))
}
export {movieInfoService}