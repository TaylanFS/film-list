'use client'

import axios from 'axios'
import './index.scss'
import { useEffect, useState } from 'react'
import FilmCard from '../FilmCard'
import { FilmType } from '../../types/film'
import ReactLoading from 'react-loading'

export default function FilmList() {
    const [films, setFilms] = useState<FilmType[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getFilms()
    }, [])

    const getFilms = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'd8b65021204f9326d7b9d6d5255e747c',
                language: 'pt-BR'
            }
        }).then((response) => {
            setFilms(response.data.results)
            
        });

        setLoading(false)
    }

    if (loading) {
        return (
            <div className='loading'>
                <ReactLoading type="spin" color="#6046ff" height={"5%"} width={"5%"} />
            </div>
        )
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

