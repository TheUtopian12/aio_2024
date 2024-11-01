import { formatter } from '@/src/utils.index';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'

interface Movie {
    id: string
    original_title: string;
    vote_average: number;
    release_date: string;
    poster_path: string
}

export const CardMovie = ({ movie }: { movie: Movie }) => {
    return (
        <Link
            href={`/${movie.id}`}
            className="w-64 max-h-max my-3 py-3 rounded-2xl bg-black flex flex-col gap-1 items-center ">
            <Image
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                width={500}
                height={150}
                className='rounded-2xl p-2 h-40'
                isZoomed
                alt='Movie image'
                style={{ objectFit: "cover" }}

            />


            <div className='w-64 text-left px-2'>

                <span className='text-md text-white'>{movie.original_title}</span>
            </div>
            <div className='w-full flex items-center space-x-10'>
                <span className=' text-white '>🌟 {
                    formatter(movie.vote_average)
                }</span>

                <span className='text-white'> {movie.release_date} </span>
            </div>
        </Link>
    )
}