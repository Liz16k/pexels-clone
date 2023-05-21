import { getCuratedPhotos } from "../api";
import Header from "./Header";
import { InfiniteGallery } from "./InfiniteGallery";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <h4>Бесплатные стоковые фото</h4>
        <InfiniteGallery queryFn={getCuratedPhotos} perPage={5} />
      </main>
    </>
  );
};
