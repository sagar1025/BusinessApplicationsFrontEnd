import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ApplicationsApi } from '../hooks/applicationsApi'

export const store = configureStore({
  reducer: {
    [ApplicationsApi.reducerPath]: ApplicationsApi.reducer
  }
})

// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)