import { useParams } from "react-router-dom";
import { getCategoryPhotos } from "../api";
import { InfiniteGallery } from "./InfiniteGallery";
import CategoryParams from "./CategoryParams";
import { ResultH } from "./../styles/elements/ResultH";

const ResultPage = () => {
  const params = useParams();
  return (
    <main>
      <CategoryParams />
      <ResultH>Изображения «{params.category}»</ResultH>
      <InfiniteGallery
        type={"category"}
        queryFn={getCategoryPhotos}
        query={params.category}
        perPage={5}
      />
    </main>
  );
};

export default ResultPage;
