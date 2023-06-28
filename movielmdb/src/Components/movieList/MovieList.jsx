import React from 'react'
import {useParams} from 'react-router-dom'
import './MovieList.css'
import Cards from '../card/Card'

export default function MovieList() {

    const [movieList, setMovieList] = React.useState([])
    const {type} = useParams()

    React.useEffect(() => {
        getData()
    }, [])

    React.useEffect(() => {
        getData()
    }, [type])

    function getData(){
        fetch(`https://api.themoviedb.org/3/movie/${type? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

  return (
    <>
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    </>
  )
}
