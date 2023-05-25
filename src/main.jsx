import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./utils/router";
import store from "./store/store";
import GlobalStyle from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </Provider>
);
