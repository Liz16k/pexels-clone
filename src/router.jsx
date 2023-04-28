import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";
import App from "./App";
import { MainPage } from "./components/MainPage";
import ResultPage from "./components/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "search/:category", element: <ResultPage /> },
    ],
  },
]);

export default router;
