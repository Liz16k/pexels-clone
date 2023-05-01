import Suggestions from "./Suggestions";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { loadBg } from "./../api";

const Header = () => {
  useEffect(() => {
    loadBg();
  }, []);

  return (
    <header>
      <div id="header_wrapper">
        <img id="bgImage" src="" alt="" />
        <h1>
          Лучшие бесплатные стоковые фото, изображения без роялти и видео от
          талантливый авторов.
        </h1>
        <NavBar />
        <div>
          <p>
            Тенденции: <Suggestions />
          </p>
        </div>
        <p>
          Автор фото —<a id="bgCaption" href="/"></a>
        </p>
      </div>
    </header>
  );
};

export default Header;
