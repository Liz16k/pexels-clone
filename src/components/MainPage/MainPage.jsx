import { getCuratedPhotos } from "../../utils/api";
import Header from "../Header/Header";
import { InfiniteGallery } from "../Gallery/InfiniteGallery";
import { MainPageContainer } from './MainPageContainer.style';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <main>
        <h4>Бесплатные стоковые фото</h4>
        <InfiniteGallery
          type={"curated"}
          queryFn={getCuratedPhotos}
          perPage={5}
        />
      </main>
    </MainPageContainer>
  );
};
