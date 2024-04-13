import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { charactersApi } from 'src/components/posts/character/slisec/charactersApi'
import characterSlice from "../components/posts/character/slisec/charactersSlice"
import characterFilterSlice from 'src/components/posts/character/slisec/characterFilterSlice' 



 const store = configureStore({
  reducer: {
    character:characterSlice,
    characterFilter: characterFilterSlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
  
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
})

setupListeners(store.dispatch)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch