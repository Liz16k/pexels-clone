import { useParams } from "react-router-dom";
import { useState } from "react";
import { getCategoryPhotos } from "../api";
import ImageGallery from "./ImageGallery";
import { useEffect } from "react";

const ResultPage = () => {
  const params = useParams();
  const [imgs, setImgs] = useState({});

  useEffect(() => {
    getCategoryPhotos(params.category).then((resp) => {
      setImgs(resp);
    });
  }, [params]);

  return (
    <div>
      <h1>result of searching: {params.category}</h1>
      <ImageGallery imgs={imgs} />
    </div>
  );
};

export default ResultPage;
