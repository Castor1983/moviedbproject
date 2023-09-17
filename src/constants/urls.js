const baseURL = process.env.REACT_APP_API;
const token = process.env.REACT_APP_API_TOKEN;
const posterURL = 'https://image.tmdb.org/t/p/w500/';
const movies = '/discover/movie';
const page = '?page=';
const page2 = '&page=';
const genre = '&with_genres=';
const keywords = '?query=';
const movie = '/movie';
const search = '/search/movie'

const urls = {
    movies: {
        byPageNumber: (numberPage) => `${movies}${page}${numberPage}`,
        byGenre: (numberPage, query) => `${movies}${page}${numberPage}${genre}${query}`,
        searchByKeywords: (query, numberPage) => `${search}${keywords}${query}${page2}${numberPage}`
    },
    movie: {
        byId: (id) => `${movie}/${id}`
    },

    genreList: '/genre/movie/list',
}
export { baseURL, urls, token, posterURL}