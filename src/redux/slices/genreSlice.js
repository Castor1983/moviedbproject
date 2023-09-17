import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreListService} from "../../services/genreListService";

const initialState = {
    genres: []
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

    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload.genres;
        })
})
const {reducer: genreReducer, actions} =genreSlice;

const genreActions = {
    ...actions,
    getAll
}

export {genreReducer, genreActions}
