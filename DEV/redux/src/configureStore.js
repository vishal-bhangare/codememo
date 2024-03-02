import { configureStore } from '@reduxjs/toolkit'
import reducer from './store/reducer'
import logger from './store/middleware/logger'
import toast from './store/middleware/toast'
import api from './store/middleware/api'

export default function () {
  return configureStore({
    reducer,
    middleware: getDefaultEnhancers => getDefaultEnhancers({ thunk: true }).concat(
      logger("console"), toast, api
    )
  })
}

// use applymiddleware func while creating store using createStore from redux