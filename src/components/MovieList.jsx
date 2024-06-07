import { Link } from "react-router-dom";
import classes from "./MovieList.module.css";
import { useState } from "react";

export default function MovieList({ data }) {
  const [displayCount, setDisplayCount] = useState(6);

  const loadMoreMovies = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  return (
    <div className={classes.movies}>
      {data.length > 0 ? (
        <>
          <ul className={classes.gridcontainer}>
            {data.slice(0, displayCount).map((item) => (
              <li key={item.id} className={classes.item}>
                <div>
                  <img src="" alt={item.movie} />
                  <div>
                    <h5>{item.movie}</h5>
                  </div>
                </div>
                <div>
                  <p>
                    <a
                      href={item.imdb_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IMDb
                    </a>
                  </p>
                  <div className={classes.details}>
                    <Link to={`${item.id}`}>See movie detail</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {displayCount < data.length && (
            <div style={{ textAlign: "center" }}>
              <button className={classes.loadbutton} onClick={loadMoreMovies}>
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
