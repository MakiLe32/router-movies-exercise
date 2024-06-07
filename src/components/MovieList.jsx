import { useState } from "react";
import classes from "./MovieList.module.css";
import MovieDetails from "../pages/MovieDetails";
import Modal from "./Modal";

export default function MovieList({ data }) {
  const [displayCount, setDisplayCount] = useState(6);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const loadMoreMovies = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
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
                  <div>
                    <button className={classes.details} onClick={() => openModal(item)}>
                      See movie detail
                    </button>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Movie Details"
        onClose={closeModal}
      >
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
      </Modal>
    </div>
  );
}
