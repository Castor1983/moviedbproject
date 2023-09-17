import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const searchByKeywordsService = {
    getAll: (query, numberPage )=> apiService.get(urls.movies.searchByKeywords(query, numberPage ))
}
export {searchByKeywordsService}