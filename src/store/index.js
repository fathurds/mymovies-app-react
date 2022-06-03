import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './favorites'
import postReducer from './posts'

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    posts: postReducer
  },
})