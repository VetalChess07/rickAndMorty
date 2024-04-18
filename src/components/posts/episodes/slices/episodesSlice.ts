import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EpisodeType } from "src/utils/types/episodesType";


type EpisodesState = {
  isLoadedEpisodes: EpisodeType[],
  page: number 
}

const initialState:EpisodesState = {
   isLoadedEpisodes: [],
   page: 1
};

const EpisodesSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
   downloadEpisodes(state, action:PayloadAction<EpisodeType[]>) {
     state.isLoadedEpisodes = [...state.isLoadedEpisodes, ...action.payload]
     state.page = state.page + 1
    
    },

   
  },
});

export const {downloadEpisodes} = EpisodesSlice.actions;

export default EpisodesSlice.reducer;

