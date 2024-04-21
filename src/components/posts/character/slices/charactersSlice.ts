import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "src/utils/types/charactersType";


type CharacterState = {
  isLoadedCharacters: Character[],
  page: number 
}

const initialState:CharacterState = {
  isLoadedCharacters: [],
   page: 1
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
   downloadCharacter(state, action:PayloadAction<Character[]>) {
     state.isLoadedCharacters = [...state.isLoadedCharacters, ...action.payload]
     state.page = state.page + 1
    
    },

   
  },
});

export const {downloadCharacter} = charactersSlice.actions;

export default charactersSlice.reducer;

