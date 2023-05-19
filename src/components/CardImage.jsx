import { useDispatch, useSelector } from "react-redux";
import { downloadImage } from "./../api";
import { addLikedPhoto, removeLikedPhoto } from "../store/photosSlice";
import CardButton from "./elements/CardButton";

export const CardImage = ({ imgData }) => {
  const { photographer, photographer_url, src, alt, id } = imgData;
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);

  const setLike = () => {
    photos.likedPhotos.includes(id)
      ? dispatch(removeLikedPhoto(id))
      : dispatch(addLikedPhoto(id));
  };

  return (
    <div>
      <img src={src.medium} alt={alt} />
      <div>
        <div>
          <a href={photographer_url}>{photographer}</a>
        </div>
        <div>
          <CardButton
            type="download"
            onClick={() => downloadImage(src.original, alt)}
          />
          <CardButton
            type="like"
            isLiked={photos.likedPhotos.includes(id)}
            onClick={setLike}
          />
        </div>
      </div>
    </div>
  );
};
