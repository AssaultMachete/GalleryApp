import { createBrowserRouter, RouterProvider } from "react-router";
import KagariGallery from "./Pages/KagariGallery";
import KarenGallery from "./Pages/KarenGallery";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "kagariGallery",
        element: <KagariGallery />,
      },
      {
        path: "karenGallery",
        element: <KarenGallery />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
