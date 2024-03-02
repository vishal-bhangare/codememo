import { configureStore } from '@reduxjs/toolkit'
import reducer from './store/todos'



export default function () {
  return configureStore({
    reducer
  })
}