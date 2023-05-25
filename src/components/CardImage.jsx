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
      <img src={src.large} alt={alt} width={"100%"} />
      <CardOverlay>
        <CardButton onClick={setLike} role="like">
          {photos.likedPhotos.includes(id) ? (
            <img src="/src/assets/favourite_FILL.svg" alt="liked" />
          ) : (
            <img src="/src/assets/favourite.svg" alt="unliked" />
          )}
        </CardButton>
        <p>
          <a className="image__author" href={photographer_url}>
            {photographer}
          </a>
          <CardButton
            role="download"
            onClick={() => downloadImage(src.original, alt)}
          >
            <img src="/src/assets/download.svg" alt="download" />
          </CardButton>
        </p>
      </CardOverlay>
    </CardContainer>
  );
};
