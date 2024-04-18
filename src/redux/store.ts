import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { charactersApi } from 'src/components/posts/character/slices/charactersApi'
import characterSlice from "../components/posts/character/slices/charactersSlice"
import { characterInfoApi } from 'src/page/characterInfo/slices/characterInfoApi'


import { locationsApi } from 'src/components/posts/locations/slices/locationsApi'
import locationsSlice from 'src/components/posts/locations/slices/locationsSlice'
import { locationInfoApi } from 'src/page/locationsInfo/slices/locationsInfoApi'


// import characterFilterSlice from 'src/components/posts/character/slices/characterFilterSlice' 


 const store = configureStore({
  reducer: {
    character:characterSlice,
    locations:locationsSlice,
    // characterFilter: characterFilterSlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
    [characterInfoApi.reducerPath]:characterInfoApi.reducer,
    [locationsApi.reducerPath]:  locationsApi.reducer,
    [locationInfoApi.reducerPath]: locationInfoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      charactersApi.middleware,
      characterInfoApi.middleware,
      locationsApi.middleware,
      locationInfoApi.middleware  
    ),
})

setupListeners(store.dispatch)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch