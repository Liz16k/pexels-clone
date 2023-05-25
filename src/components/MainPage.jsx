import { getCuratedPhotos } from "../api";
import Header from "./Header";
import { InfiniteGallery } from "./InfiniteGallery";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main style={{paddingTop: "1.5rem"}}>
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
