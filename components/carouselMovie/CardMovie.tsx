import { formatter } from '@/src/utils.index';
import Image from 'next/image'
import React from 'react'

interface Movie {
    original_title: string;
    vote_average: number;
    release_date: string;
    poster_path: string
}

export const CardMovie = ({ movie }: { movie: Movie }) => {
    return (
        <div className="w-64 max-h-max my-3 py-3 rounded-2xl bg-black flex flex-col gap-1 items-center ">
            <Image
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                width={500}
                height={200}
                className='rounded-2xl p-2 h-40'

                alt='Movie image'
                style={{ objectFit: "cover" }}

            />


            <div className='w-64 text-left px-5'>

                <span className='text-lg text-white'>{movie.original_title}</span>
            </div>
            <div className='w-full flex items-center space-x-10'>
                <span className=' text-white '>🌟 {
                    formatter(movie.vote_average)
                }</span>

                <span className='text-white'> {movie.release_date} </span>
            </div>
        </div>
    )
}