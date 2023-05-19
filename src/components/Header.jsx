import Suggestions from "./Suggestions";
import { useEffect } from "react";
import { loadBg } from "./../api";
import BgImg from "./elements/BgImg";
import SearchForm from "./SearchForm";
import HeaderContainer from "./elements/HeaderContainer";

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
        <div>
          <p>
            Тенденции: <Suggestions />
          </p>
        </div>
        <p>
          Автор фото —<a id="bgCaption" href="/" target="_blank"></a>
        </p>
      </HeaderContainer>
    </header>
  );
};

export default Header;
