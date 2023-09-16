const baseURL = process.env.REACT_APP_API;
const token = process.env.REACT_APP_API_TOKEN;
const posterURL = 'https://image.tmdb.org/t/p/w500/';
const movies = '/discover/movie';
const page = '?page=';
const genre = '&with_genres=';
const keywords = '&with_keywords=';
const movie = '/movie';

const urls = {
    movies: {
        byPageNumber: (numberPage) => `${movies}${page}${numberPage}`,
        byGenre: (numberPage, query) => `${movies}${page}${numberPage}${genre}${query}`,
        searchByKeywords: (numberPage, query) => `${movies}${page}${numberPage}${keywords}${query}`
    },
    movie: {
        byId: (id) => `${movie}/${id}`
    },

    genreList: '/genre/movie/list',
}
export { baseURL, urls, token, posterURL}