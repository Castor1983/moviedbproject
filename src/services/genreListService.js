import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const genreListService = {
    getAll: ()=> apiService.get(urls.genreList)
}
export {genreListService}