import { FilmType } from "@/types/film"
import StarRating from "../StarRating"
import './index.scss'

export interface Props {
    film: FilmType
}

export default function FilmCard(props: Props) {

    const film = props.film

    return (
        
       <li className="film-card">

            <div className="film-poster">
                <img
                    src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
                    alt={film.title}
                />
            </div>

            <div className="film-info">
                <p className="film-title">
                    {film.title}
                </p>

                {film.vote_average > 0 &&
                    <StarRating
                        rating={film.vote_average}
                    />
                }
                
            </div>

            <div className="hidden-content">
                {film.overview && 
                
                    <p className='film-overview'>
                        {film.overview.length > 100
                            ? `${film.overview.substring(0, 100)}...`
                            : film.overview}
                    </p>
                }
                <p className='film-overview'>
                    {film.overview.length > 100
                    ? `${film.overview.substring(0, 100)}...`
                    : film.overview}
                </p>
                <p className='film-overview'>
                    {film.overview.length > 100
                    ? `${film.overview.substring(0, 100)}...`
                    : film.overview}
                </p>

                <button className="button-default">
                    Ver mais
                </button>
            </div>
        </li>
    
    )
}