import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesListService} from "../../services/moviesListService";
import {moviesFilterByGenreService} from "../../services/moviesfFilterByGenreService";
import {movieInfoService} from "../../services/movieInfoService";

const initialState = {
    movies: [],
    movie: null,
    page: null,
    totalPages: null,
    error: null
}
const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (page, thunkAPI) => {
        try {
            const {data} = await moviesListService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const getFilterByGenre = createAsyncThunk(
    'movieSlice/getFilterByGenre',
    async ({page, genre}, thunkAPI) => {
        try {
            const {data} = await moviesFilterByGenreService.getAll(page, genre);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await movieInfoService.getAll(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const  

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
            state.movie = null;
            state.error = null;
        })
        .addCase(getFilterByGenre.fulfilled, (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
            state.movie = null;
            state.error = null;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.movie = action.payload;
        })

})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getFilterByGenre,
    getById
}

export {movieReducer, movieActions}