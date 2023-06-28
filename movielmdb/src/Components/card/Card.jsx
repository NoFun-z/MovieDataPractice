import React from 'react'
import './Card.css'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import {Link} from 'react-router-dom'

export default function Card(Props) {

    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    }, [])

  return (
    <>
        {
            isLoading?
            <div className='cards'>
                <SkeletonTheme color="#202020" highlightColor='#444'>
                    <Skeleton height={300} duration={1}/>
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${Props.movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards">
                    <img className="cards__img" src={`https://image.tmdb.org/t/p/original${Props.movie?Props.movie.poster_path:""}`} />
                    <div className="cards__overlay">
                        <div className="card__title">{Props.movie?Props.movie.original_title:""}</div>
                        <div className="card__runtime">
                            {Props.movie?Props.movie.release_date:""}
                            <span className="card__rating">{Props.movie?Props.movie.vote_average:""}<i className="fas fa-star" /></span>
                        </div>
                        <div className="card__description">{Props.movie ? Props.movie.overview.slice(0,118)+"..." : ""}</div>
                    </div>
                </div>
            </Link>
        }
    </>
  )
}
