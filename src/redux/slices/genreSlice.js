import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreListService} from "../../services/genreListService";

const initialState = {
    genres: [],
    currentGenre:null
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, thunkAPI)=> {
        try {
            const {data} = await genreListService.getAll();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setCurrentGenre:(state, action) => {
            state.currentGenre = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload.genres;
        })
})
const {reducer: genreReducer, actions} =genreSlice;

const genreActions = {

    getAll
}

export {genreReducer, genreActions}
