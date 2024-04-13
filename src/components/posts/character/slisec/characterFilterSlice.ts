import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";
import { Character } from "src/utils/types/charactersType";



type FilterCharacterState = {
  charactersFilterArr: Character[],
  charactersFilterPage: number,
  isFilteredCharacters: boolean
}

const initialState:FilterCharacterState = {
   charactersFilterArr: [],
   charactersFilterPage: 1,
   isFilteredCharacters: false
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

export const selectCharacterFilter = (state:RootState)  => state.characterFilter

export const {downloadCharacterFilter} = characterFilterSlice.actions;

export default characterFilterSlice.reducer;

