import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : []
    },
    reducers: {
        setFavorites: (state, action) => {
            if (state.favorites.findIndex((el) => el.id === action.payload.id) === -1) {
                state.favorites.push(action.payload);
                localStorage.setItem('movies', JSON.stringify(state.favorites));
            }
        },
        removeFavorite: (state, action) => {
            const findIndex = state.favorites.findIndex((el) => el.id === action.payload);
            if (findIndex >= 0) {
                state.favorites.splice(findIndex, 1);
                localStorage.setItem('movies', JSON.stringify(state.favorites));
            }
        }
    }
})

export const { setFavorites, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;