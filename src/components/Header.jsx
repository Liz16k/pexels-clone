import Suggestions from "./Suggestions";
import { useEffect } from "react";
import { loadBg } from "./../api";
import BgImg from "../styles/elements/BgImg";
import SearchForm from "./SearchForm";
import HeaderContainer from "../styles/elements/HeaderContainer";
import { TransparentParagraph } from "../styles/elements/TransparentParagraph";
import { Attribution } from "../styles/elements/Attribution";

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
