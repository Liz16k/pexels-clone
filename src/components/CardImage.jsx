import { useDispatch, useSelector } from "react-redux";
import { downloadImage } from "./../api";
import { addLikedPhoto, removeLikedPhoto } from "../store/photosSlice";
import CardButton from "../styles/elements/CardButton";
import { CardOverlay } from "../styles/elements/CardOverlay";
import { CardContainer } from "../styles/elements/CardContainer";

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
    <CardContainer>
      <img src={src.medium} alt={alt} />
      <CardOverlay>
        <CardButton
          role="like"
          iconSrc={
            "url('/src/assets/" +
            (photos.likedPhotos.includes(id)
              ? "favorite_fill.png')"
              : "favorite_outline.png')")
          }
          isLiked={photos.likedPhotos.includes(id)}
          onClick={setLike}
        />
        <p>
          <a href={photographer_url}>{photographer}</a>
          <CardButton
            role="download"
            iconSrc="url('/src/assets/download.png')"
            onClick={() => downloadImage(src.original, alt)}
          />
        </p>
      </CardOverlay>
    </CardContainer>
  );
};
