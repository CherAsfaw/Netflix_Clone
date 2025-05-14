import React, { useEffect, useState } from 'react'
import './row.css'
import axios from '../../../utiles/axios'
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { Padding } from '@mui/icons-material';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get("v"); 
          console.log(videoId);
          setTrailerUrl(videoId);
        })
        .catch((error) => console.error("Trailer not found:", error));
    }
  };
  
 
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }
  
  

      return(
 
    <div>
      <h1 className='text-light my-3'>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, i) => (
          <img
            onClick={() => handleClick(movie)}
            key={i}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
          />
        ))}
      </div>
      <div style={{Padding: '40px'}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>

  );
}

export default Row