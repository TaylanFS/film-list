'use client'

import axios from 'axios'
import './index.scss'
import { useEffect } from 'react'


export default function FilmList() {
    // const [films, setFilms] = useState([])

    useEffect(() => {
        getFilms()
    })

    const getFilms = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'd8b65021204f9326d7b9d6d5255e747c',
                language: 'pt-BR'
            }
        }).then((response) => {
            // setFilms(response.data.results)
            console.log(response.data.results);
            
        })
    }

    return (
        <ul className='film-list'>
            {/* {films.map((film) => {
                <li></li>
            })} */}
            
        </ul>
    )
}

