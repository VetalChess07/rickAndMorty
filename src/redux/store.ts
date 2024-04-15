import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { charactersApi } from 'src/components/posts/character/slices/charactersApi'
import characterSlice from "../components/posts/character/slices/charactersSlice"
import characterFilterSlice from 'src/components/posts/character/slices/characterFilterSlice' 
import { characterInfoApi } from 'src/page/characterInfo/slices/characterInfoApi'


 const store = configureStore({
  reducer: {
    character:characterSlice,
    characterFilter: characterFilterSlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
    [characterInfoApi.reducerPath]:characterInfoApi.reducer
  
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware, characterInfoApi.middleware),
})

setupListeners(store.dispatch)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch