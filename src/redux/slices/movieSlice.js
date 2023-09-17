import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesListService} from "../../services/moviesListService";

const initialState = {
    movies: [],
    movie: null,
    page: null,
    totalPages: null,
    error: null
}
const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (page, thunkAPI)=> {
        try {
const {data} = await moviesListService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
    )
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{

    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
            state.movie = null;
            state.error = null;
        })
})
const {reducer: movieReducer, actions} =movieSlice;

const movieActions = {
getAll
}

export {movieReducer, movieActions}