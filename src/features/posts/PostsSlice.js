import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    entities:[],
    loading:false
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () =>{
    const response = await axios.get(Api);
    return response.data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchPosts.fulfilled, (state,action)=>{
            state.entities.push(...action.payload)
            state.loading=false
            alert('Get Post Success')
        })
        builder.addCase(fetchPosts.rejected, (state,action)=>{
            state.loading=true
            alert('Get Post Failed Failed')
        })
        builder.addCase(fetchPosts.pending, (state,action)=>{
            state.loading=true
        })
    }
    
})

export default postsSlice.reducer