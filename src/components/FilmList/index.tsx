'use client'

import axios from 'axios'
import './index.scss'
import { useEffect, useState } from 'react'
import FilmCard from '../FilmCard'
import { FilmType } from '../../types'



export default function FilmList() {
    const [films, setFilms] = useState<FilmType[]>([])

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
                <FilmCard
                    key={film.id}
                    film={film}
                />
            )}
        </ul>
    )
}

