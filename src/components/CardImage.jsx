import { useDispatch, useSelector } from "react-redux";
import { downloadImage } from "./../api";
import { addLikedPhoto, removeLikedPhoto } from "../store/photosSlice";

export const CardImage = ({ imgData }) => {
  const { photographer, photographer_url, src, alt, id } = imgData;
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const btnStyles = {
    backgroundPosition: "center",
    backgroundSize: "contain",
    border: "none",
    backgroundColor: "transparent",
    height: "1.5rem",
    width: "1.5rem",
    cursor: "pointer",
  };
  return (
    <div>
      <img src={src.medium} alt={alt} />
      <div>
        <div>
          <a href={photographer_url}>{photographer}</a>
        </div>
        <div>
          <button
            style={{
              backgroundImage: `url('/src/assets/favorite_${
                photos.likedPhotos.includes(id) ? "fill" : "outline"
              }.png')`,
              ...btnStyles,
            }}
            onClick={() => {
              photos.likedPhotos.includes(id)
                ? dispatch(removeLikedPhoto(id))
                : dispatch(addLikedPhoto(id));
            }}
          ></button>
          <button
            style={{
              backgroundImage: "url('/src/assets/download.png')",
              ...btnStyles,
            }}
            onClick={() => downloadImage(src.original, alt)}
          ></button>
        </div>
      </div>
    </div>
  );
};
