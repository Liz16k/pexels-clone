import { useEffect } from "react";
import { loadBg } from "../../utils/api";
import Suggestions from "./Suggestions";
import BgImg from "./BgImg.styles";
import SearchForm from "../SearchForm/SearchForm";
import HeaderContainer from "./HeaderContainer.styles";
import { TransparentParagraph } from "../elements/TransparentParagraph.styles";
import { Attribution } from "../elements/Attribution.styles";

const Header = () => {
  useEffect(() => {
    loadBg();
  }, []);

  return (
    <header>
      <HeaderContainer>
        <BgImg id="bgImage" />
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
          <a id="bgCaption" href="/" target="_blank"></a>
        </Attribution>
      </HeaderContainer>
    </header>
  );
};

export default Header;
