import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadedPhotos: [],
  page: 1,
  likedPhotos: [],
};

const photosSlice = createSlice({
  name: "photos",
  initialState: initialState,
  reducers: {
    addLikedPhoto: (state, action) => {
      state.likedPhotos.push(action.payload);
    },
    removeLikedPhoto: (state, action) => {
      state.likedPhotos = state.likedPhotos.filter(
        (photo) => photo.id !== action.payload.id
      );
    },
    addPhotos: (state, action) => {
      state.loadedPhotos.push(
        ...action.payload.filter(
          (photo) => !state.loadedPhotos.some((p) => p.id === photo.id)
        )
      );
    },
    loadPage: (state) => {
      state.page += 1;
    },
    clrGallery: (state) => {
      state.loadedPhotos.length = 0;
      state.page = 1;
    },
  },
});

export const {
  addLikedPhoto,
  removeLikedPhoto,
  addPhotos,
  clrGallery,
  loadPage,
} = photosSlice.actions;
export default photosSlice.reducer;
