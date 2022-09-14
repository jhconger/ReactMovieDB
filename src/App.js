import './App.css';
import React, {useState, useEffect} from 'react';
import MovieBox from './MovieBox'
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=a79c10e281bddf600e942e8113e61d3a"
function App() {

    const [movies, setMovies] = useState([]);

     useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results);
            })
    }, []);

    return (
        <div className= "container">
            <div className="grid">
            {movies.map((movieReq) =>
                <MovieBox key ={movieReq.id}{...movieReq}/>)}
            </div>
        </div>
    );
}

export default App;
