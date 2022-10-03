import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './header'

export const store = configureStore({
  reducer: { header: headerReducer },
})
