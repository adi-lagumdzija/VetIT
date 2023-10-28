import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import dogService from './dogService'

const initialState = {
    dogs : [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}




export const getDogs = createAsyncThunk(
    'dogs/getAll',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await dogService.getDogs(token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const dogSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getDogs.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getDogs.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.dogs = action.payload
        })
        .addCase(getDogs.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })
  

export const {reset} = dogSlice.actions
export default dogSlice.reducer