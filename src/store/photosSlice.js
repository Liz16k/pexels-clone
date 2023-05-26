import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadedPhotos: [],
  page: 1,
  likedPhotos: [],
  responsePhotoAmount: 0,
  bgPhotoData: {
    src: "/",
    alt: "",
    photographer: "",
    photographer_url: "/",
  },
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
        (photoId) => photoId !== action.payload
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
    updateTotalPhotos: (state, action) => {
      state.responsePhotoAmount = action.payload;
    },
    updateBgPhoto: (state, action) => {
      state.bgPhotoData = action.payload;
    },
  },
});

export const {
  addLikedPhoto,
  removeLikedPhoto,
  addPhotos,
  clrGallery,
  loadPage,
  updateTotalPhotos,
  updateBgPhoto,
} = photosSlice.actions;
export default photosSlice.reducer;
