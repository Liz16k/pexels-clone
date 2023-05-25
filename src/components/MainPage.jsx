import { getCuratedPhotos } from "../utils/api";
import Header from "./Header/Header";
import { InfiniteGallery } from "./Gallery/InfiniteGallery";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "1.5rem" }}>
        <h4>Бесплатные стоковые фото</h4>
        <InfiniteGallery
          type={"curated"}
          queryFn={getCuratedPhotos}
          perPage={5}
        />
      </main>
    </>
  );
};
