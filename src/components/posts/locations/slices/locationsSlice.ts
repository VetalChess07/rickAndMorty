import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocationsType } from "src/utils/types/locationsType";


type LocationsState = {
  isLoadedLocations: LocationsType[],
  page: number 
}

const initialState:LocationsState = {
   isLoadedLocations: [],
   page: 1
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
   downloadLocation(state, action:PayloadAction<LocationsType[]>) {
     state.isLoadedLocations = [...state.isLoadedLocations, ...action.payload]
     state.page = state.page + 1
    
    },

   
  },
});

export const {downloadLocation} = locationsSlice.actions;

export default locationsSlice.reducer;

