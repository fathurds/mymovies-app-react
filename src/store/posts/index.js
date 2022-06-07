import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        filteredPosts: [],
        posts: [],
        search: [],
        detail: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setFilteredPosts: (state, action) => {
            state.filteredPosts = action.payload;
        },
        setSearchGlobal: (state, action) => {
            state.search = action.payload;
        },
        setDetail: (state, action) => {
            state.detail = action.payload;
        }
    }
})

export const { setPosts, setFilteredPosts, setSearchGlobal, setDetail } = postSlice.actions;

export default postSlice.reducer;