import { PropagateLoader } from "react-spinners";
import { LoaderContainer } from "./LoaderContainer.styles";

export const Loader = ({ isloading }) => {
  return (
    <LoaderContainer>
      <PropagateLoader
        color="#000000"
        size={20}
        speedMultiplier={1}
        loading={isloading}
      />
    </LoaderContainer>
  );
};
