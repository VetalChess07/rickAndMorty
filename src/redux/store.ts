import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from 'src/components/posts/character/slisec/postsApi'
import { postsFilter } from 'src/components/posts/character/slisec/postsFilter'
import characterSlice from "../components/posts/character/slisec/postsSlice"
import characterFilterSlice from 'src/components/posts/character/slisec/characterFilterSlice' 



 const store = configureStore({
  reducer: {
    character:characterSlice,
    characterFilter: characterFilterSlice,
    [postsApi.reducerPath]: postsApi.reducer,
    [postsFilter.reducerPath]: postsFilter.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, postsFilter.middleware),
})

setupListeners(store.dispatch)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch