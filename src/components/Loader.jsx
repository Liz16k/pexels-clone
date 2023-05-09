import { PropagateLoader } from "react-spinners";

export const Loader = ({ isloading }) => {
  return (
    <div
      style={{
        height: "4rem",
        width: "100%",
        position: "fixed",
        bottom: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PropagateLoader
        color="#000000"
        size={20}
        speedMultiplier={1}
        loading={isloading}
      />
    </div>
  );
};
