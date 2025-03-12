import { FilmType } from "@/types"

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

            <div>
                <p>
                    {film.title}
                </p>
            </div>

            

            <p className='film-overview'>
                    {film.overview}
            </p>
            
            <p>
                {film.vote_average}
            </p>
        </li>
    
    )
}