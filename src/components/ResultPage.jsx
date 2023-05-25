import { useParams } from "react-router-dom";
import { getCategoryPhotos } from "../utils/api";
import { InfiniteGallery } from "./Gallery/InfiniteGallery";
import CategoryParams from "./CategoryParams/CategoryParams"
import { ResultH } from './elements/ResultH.styles';

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
