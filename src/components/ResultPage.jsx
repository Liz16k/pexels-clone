import { useParams } from "react-router-dom";

const ResultPage = () => {
  const params = useParams();
  return <h1>result of searching: {params.category}</h1>;
};

export default ResultPage;
