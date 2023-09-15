const baseURL = process.env.REACT_APP_API;
const token = process.env.REACT_APP_API_TOKEN;
const posterURL = 'https://image.tmdb.org/t/p/w500/';
const movies = '/discover/movie';
const page = '?page=';
const movie = '/movie'

const urls = {
    movies: {
        byPageNumber: () => `${movies}${page}14`
    },
    movie: {
        byId: (id) => `${movie}/${id}`
    }
}
export { baseURL, urls, token, posterURL}