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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              width="18"
            >
              <path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="18"
              fill="#d3405c"
            >
              <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" />
            </svg>
          )}
        </CardButton>
        <p>
          <a href={photographer_url}>{photographer}</a>
          <CardButton
            role="download"
            onClick={() => downloadImage(src.original, alt)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              width="18"
            >
              <path d="M220 896q-24 0-42-18t-18-42V693h60v143h520V693h60v143q0 24-18 42t-42 18H220Zm260-153L287 550l43-43 120 120V256h60v371l120-120 43 43-193 193Z" />
            </svg>
          </CardButton>
        </p>
      </CardOverlay>
    </CardContainer>
  );
};
