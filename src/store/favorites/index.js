import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: []
    },
    reducers: {
        setFavorites: (state, action) => {
            if (state.favorites.findIndex((el) => el.id === action.payload.id) === -1) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            const findIndex = state.favorites.findIndex((el) => el.id === action.payload);
            if (findIndex >= 0) { state.favorites.splice(findIndex, 1) }
        }
    }
})

export const { setFavorites, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;