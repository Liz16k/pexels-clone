import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { MainPage } from "../components/MainPage";
import ResultPage from "../components/ResultPage";
import { Layout } from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "search/:category", element: <ResultPage /> },
      { path: "search/:category/:search", element: <ResultPage /> },
    ],
  },
]);

export default router;
