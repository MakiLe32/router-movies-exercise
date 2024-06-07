import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function MovieDetails() {
  const data = useLoaderData();
  const [paragr, setParagr] = useState(false);
  console.log(data);

  function handleClick() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.some((movie) => movie.id === data.id)) {
      favorites.push(data);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setParagr(true);
    setInterval(() => {
      setParagr(false);
    }, 2500);
  }

  return (
    <div className="movie-item">
      <article>
        <img src={data.image} alt={data.movie} />
        <h1>{data.movie}</h1>
        <p>{data.rating}</p>
        <p>
          <a href={data.imdb_url}>IMDb</a>
        </p>
        {paragr ? <p>Added to favorites!</p> : <p style={{color: 'rgba(0, 0, 0, 0.3)'}}>...</p>}
        <button className="movie-item-fav" onClick={handleClick}>
          Add to favorites
        </button>
      </article>
    </div>
  );
}

export function loader({ params }) {
  const id = params.id;
  return axios
    .get(`https://dummyapi.online/api/movies/${id}`)
    .then((response) => {
      const movieDetails = response.data;
      return movieDetails;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}
