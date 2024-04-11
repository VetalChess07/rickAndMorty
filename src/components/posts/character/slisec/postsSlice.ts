import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "src/utils/types/charactersType";
import { RootState } from "@reduxjs/toolkit/query";


type CharacterState = {
  characters: Character[],
  page: number 
}

const initialState:CharacterState = {
   characters: [],
   page: 1
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
   downloadCharacter(state, action:PayloadAction<Character[]>) {
     state.characters = [...state.characters, ...action.payload]
     state.page = state.page + 1
    
    },

   
  },
});

export const {downloadCharacter} = characterSlice.actions;

export default characterSlice.reducer;

