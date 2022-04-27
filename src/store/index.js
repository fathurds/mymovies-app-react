import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './favorites'

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
})