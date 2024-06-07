import { useState } from "react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  function handleRemoveClick(id) {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  return (
    <div style={{ margin: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map((movie) => (
          <div
            style={{
              margin: "3rem",
            }}
            key={movie.id}
          >
            <h2>{movie.movie}</h2>
            <div style={{display: "flex", justifyContent: 'space-around', maxWidth: '20rem'}}>
              <p>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href={movie.imdb_url}
                >
                  IMDb
                </a>
              </p>
              <button className="button" onClick={() => handleRemoveClick(movie.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}
