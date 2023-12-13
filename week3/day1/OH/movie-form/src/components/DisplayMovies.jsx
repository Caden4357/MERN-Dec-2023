import React, { useState } from 'react';

const DisplayMovies = (props) => {
    const { movieList } = props
    return (
        <div>
            <h2>Display</h2>
            {
                // movieList.map((movie,idx) => (
                //     <div key={idx} style={{border:'2px solid red'}}>
                //         <h2>Title: {movie.title}</h2>
                //         <h2>Director: {movie.director}</h2>
                //         <h2>Genre: {movie.genre}</h2>
                //         <h2>Release Year: {movie.releaseYear}</h2>
                //     </div>
                // ))
                movieList.map((movie) => {
                    return (
                        <div style={{ border: '2px solid red' }}>
                            <h2>Title: {movie.title}</h2>
                            <h2>Director: {movie.director}</h2>
                            <h2>Genre: {movie.genre}</h2>
                            <h2>Release Year: {movie.releaseYear}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayMovies;