import React, { useEffect, useState } from 'react'
import axios from '../../utiles/axios';
import requests from '../../utiles/requests';
import './banner.css'

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOrginals);
        // console.log(request);

        const results = request.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        const randomMovie = results[randomIndex];

        setMovies(randomMovie);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner-title">
          <h1>{movies?.title || movies?.name || movies?.original_name}</h1>
          <div>
            <button className="custom-btn btn-play">Play</button>
            <button className="custom-btn btn-list">My List</button>
          </div>
          <p className="movie_description">{truncate(movies?.overview, 150)}</p>
          <div className='banner_faded'/>
        </div>
      </div>
    </>
  );
}

export default Banner