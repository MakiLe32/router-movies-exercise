import { useState } from "react";

export default function MovieDetails({ movie, img }) {
  const [paragr, setParagr] = useState(false);

  console.log(movie);

  function handleClick() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.some((item) => item.id === movie.id)) {
      favorites.push(movie);
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
        <img src={img} alt={movie.movie} />
        <h1>{movie.movie}</h1>
        <p>{movie.rating}</p>
        <p>
          <a href={movie.imdb_url}>IMDb</a>
        </p>
        {paragr ? (
          <p style={{ color: "#ffd37c", fontWeight: "bold" }}>
            Added to favorites!
          </p>
        ) : (
          <p style={{ color: "rgba(0, 0, 0, 0.3)" }}>...</p>
        )}
        <button className="movie-item-fav" onClick={handleClick}>
          Add to favorites
        </button>
      </article>
    </div>
  );
}
