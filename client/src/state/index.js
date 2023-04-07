import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  songs: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setSongs: (state, action) => {
      state.songs = action.payload.songs;
    },
    setSong: (state, action) => {
      const updatedSongs = state.songs.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.songs = updatedSongs;
    },
    addSong: (state, action) => {
      state.songs = [action.payload.songs, ...state.songs];
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setFriends,
  setSongs,
  setSong,
  addSong,
} = authSlice.actions;
export default authSlice.reducer;