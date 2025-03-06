'use client'

import axios from 'axios'
import './index.scss'
import { useEffect, useState } from 'react'


export default function FilmList() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        getFilms()
    }, [])

    const getFilms = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'd8b65021204f9326d7b9d6d5255e747c',
                language: 'pt-BR'
            }
        }).then((response) => {
            setFilms(response.data.results)
            
        })
    }

    return (
        <ul className='film-list'>
            {films.map((film) => 
                <li className='film-card'>
                    <p>
                        {film.title}
                    </p>
                    <p className='film-overview'>
                        {film.overview}
                    </p>
                    <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt="" />
                    <p>
                        {film.vote_average}
                    </p>
                </li>
            )}
            
        </ul>
    )
}

