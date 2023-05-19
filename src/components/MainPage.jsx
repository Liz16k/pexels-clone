import { getCuratedPhotos } from "../api";
import Header from "./Header";
import { InfiniteGallery } from "./InfiniteGallery";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Home page</h1>
        <InfiniteGallery queryFn={getCuratedPhotos} perPage={5} />
      </main>
    </>
  );
};
