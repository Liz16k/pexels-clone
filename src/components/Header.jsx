import { getData } from "../api";
import { useState } from "react";
import Suggestions from "./Suggestions";
import NavBar from "./NavBar";

const Header = () => {
  const [bgImage, setBgImage] = useState({});

  const bgPhoto = () =>
    getData().then(({ url, photographer, photographer_url }) =>
      setBgImage({ url, photographer, photographer_url })
    );

  bgPhoto();

  return (
    <header>
      <div>
        <img src={bgImage.url} />
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
          Автор фото —
          <a href={bgImage.photographer_url}>{bgImage.photographer}</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
