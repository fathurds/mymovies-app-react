import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        filteredPosts: [],
        posts: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setFilteredPosts: (state, action) => {
            state.filteredPosts = action.payload;
        }
    }
})

export const { setPosts, setFilteredPosts } = postSlice.actions;

export default postSlice.reducer;