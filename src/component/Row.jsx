import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

const Row = ({ title, movieType }) => {
  const [movies, setMovies] = useState([]);
  const leafRoot = "movies";

  useEffect(() => {
    fetchMovies(movieType);
  }, []);

  const fetchMovies = (movieType) => {
    const movieRef = ref(database, `${leafRoot}/${movieType}`);
    onValue(movieRef, (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        setMovies(() => movies);
      }
    });
    console.log(movies);
  };

  //     const starCountRef = ref(db, 'posts/' + postId + '/starCount');
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   updateStarCount(postElement, data);
  // });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, ind) => (
          <img
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
