import Suggestions from "./Suggestions";
import { useEffect } from "react";
import { loadBg } from "./../api";
import BgImg from "./elements/BgImg";
import SearchForm from "./SearchForm";
import HeaderContainer from "./elements/HeaderContainer";
import { TransparentParagraph } from "./elements/TransparentParagraph";
import { Attribution } from "./elements/Attribution";

const Header = () => {
  useEffect(() => {
    loadBg();
  }, []);

  return (
    <header>
      <BgImg id="bgImage" />
      <HeaderContainer>
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
