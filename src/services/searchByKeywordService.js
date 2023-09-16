import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const searchByKeywordsService = {
    getAll: (numberPage, query)=> apiService.get(urls.movies.searchByKeywords(numberPage, query))
}
export {searchByKeywordsService}