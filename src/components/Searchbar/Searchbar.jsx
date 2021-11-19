import axios from 'axios';
import React, { useState } from 'react'
import "./Searchbar.css"
import { API_KEY_IMDB, URL } from '../common';
import "../MovieList/MovieList.css"

const Searchbar = () => {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const updateSearch = async () => {
        const response = await axios.get(URL + `?apikey=${API_KEY_IMDB}&s=${search}`)
        setSearch(response.data.Search)
        setMovies(response.data.Search)
    }

    return (
        <>
            <div className="search-bar-container">
                <input
                    className="search-bar-input"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            updateSearch()
                            setSearch("")
                        }
                    }}
                    placeholder="Search.." />
                <button className="search-buttom ui icon buttom"
                    onClick={() => {
                        updateSearch()
                        setSearch("")
                    }}
                >
                    <i className="search-buttom-i search icon"></i>
                </button>
            </div>
            <div className="container-movie-list">
                {movies !== [] &&
                    movies.map(movie => {
                        return (
                            <>
                                <div className='image-container' key={movie.imdbID}>

                                    <a href={`/movie-detail/${movie.imdbID}`} >
                                        <img className="image" src={movie.Poster}
                                            alt={movie.Title} />
                                    </a>
                                    <h3>{movie.Title}</h3>
                                </div>
                            </>
                        )
                    })}
            </div>
        </>
    )
}

export default Searchbar