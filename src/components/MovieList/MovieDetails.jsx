import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { API_KEY_IMDB, URL } from '../common';
import "./movie.css"

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = React.useState({});
    const getMovieDetails = async (id) => {
        const response = await axios.get(URL + '?i=' + id + '&apikey=' + API_KEY_IMDB);
        setMovie(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        getMovieDetails(id);
    }, [id]);

    return (
        <div className='image-container-details' key={movie.imdbID}>
            <img src={movie.Poster}
                alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Language}</p>
            <p>{movie.Actors}</p>
            <p>{movie.Director}</p>
            <p>{movie.Writer}</p>
            <p>{movie.Released}</p>
            <p>{movie.imdbRating}</p>
            <p>{movie.Country}</p>
        </div>
    )
}

export default MovieDetails
