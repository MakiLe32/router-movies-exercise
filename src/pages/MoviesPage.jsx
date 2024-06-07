import axios from "axios";
import { useLoaderData } from "react-router-dom";
import MovieList from "../components/MovieList";

export default function MoviesPage() {
  const data = useLoaderData();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Movies</h1>
      <MovieList data={data} />
    </>
  );
}

export function loader() {
  return axios
    .get("https://dummyapi.online/api/movies")
    .then((response) => {
      const movieData = response.data;
      return movieData;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}
