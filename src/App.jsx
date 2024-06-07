import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import MoviesPage, { loader as movieLoader } from "./pages/MoviesPage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieDetails, {
  loader as movieDetailsLoader,
} from "./pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "movies",
        element: <MoviesPage />,
        loader: movieLoader,
      },
      {
        path: "movies/:id",
        element: <MovieDetails />,
        loader: movieDetailsLoader,
      },
      {
        path: "movies/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
