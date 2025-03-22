import { FilmType } from "@/types/film"
import StarRating from "../StarRating"

export interface Props {
    film: FilmType
}

export default function FilmCard(props: Props) {

    const film = props.film

    return (
        
       <li className='film-card'>

            <div className="film-poster">
                <img
                    src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
                    alt={film.title}
                />
            </div>

            <div className="filme-info">
                <p className="film-title">
                    {film.title}
                </p>

                <StarRating
                    rating={film.vote_average}
                />
            </div>

            <div className="hidden-content">
                <p className='film-overview'>
                    {film.overview}
                </p>
            </div>
        </li>
    
    )
}