import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewBgPhoto } from "../../utils/api";
import { updateBgPhoto } from "../../store/photosSlice";
import Suggestions from "./Suggestions";
import BgImg from "./BgImg.styles";
import SearchForm from "../SearchForm/SearchForm";
import HeaderContainer from "./HeaderContainer.styles";
import { TransparentParagraph } from "../elements/TransparentParagraph.styles";
import { Attribution } from "../elements/Attribution.styles";

const Header = () => {
  const dispatch = useDispatch();
  const bgImage = useSelector((state) => state.photos.bgPhotoData);
  const { src, alt, photographer, photographer_url } = bgImage
  useEffect(() => {
    getNewBgPhoto().then((photoData) => {
      dispatch(updateBgPhoto(photoData));
    });
  }, []);

  return (
    <header>
      <HeaderContainer>
        <BgImg src={src} alt={alt} />
        <h1>
          Лучшие бесплатные стоковые фото, изображения без роялти и видео от
          талантливый авторов.
        </h1>
        <SearchForm />
        <TransparentParagraph>
          <span>Тенденции: </span>
          <Suggestions />
        </TransparentParagraph>
        <Attribution>
          <span>Автор фото —</span>
          <a href={photographer_url} target="_blank" rel="noopener noreferrer">
            {photographer}
          </a>
        </Attribution>
      </HeaderContainer>
    </header>
  );
};

export default Header;
