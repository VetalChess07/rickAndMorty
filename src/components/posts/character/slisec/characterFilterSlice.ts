import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "src/utils/types/charactersType";


type FilterCharacterState = {
  charactersFilterArr: Character[],
  charactersFilterPage: number 
}

const initialState:FilterCharacterState = {
   charactersFilterArr: [],
   charactersFilterPage: 1
};

const characterFilterSlice = createSlice({
  name: "charactersFilter",
  initialState,
  reducers: {
   downloadCharacterFilter(state, action:PayloadAction<Character[]>) {
     state.charactersFilterArr = [...state.charactersFilterArr, ...action.payload]
     state.charactersFilterPage = state.charactersFilterPage + 1
    
    },

   
  },
});

export const {downloadCharacterFilter} = characterFilterSlice.actions;

export default characterFilterSlice.reducer;

