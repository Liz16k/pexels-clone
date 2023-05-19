import { useParams } from "react-router-dom";
import { getCategoryPhotos } from "../api";
import { InfiniteGallery } from "./InfiniteGallery";

const ResultPage = () => {
  const params = useParams();
  return (
    <main>
      <h1>result of searching: {params.category}</h1>
      <InfiniteGallery
        queryFn={getCategoryPhotos}
        query={params.category}
        perPage={5}
      />
    </main>
  );
};

export default ResultPage;
