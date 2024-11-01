"use client";

import { useEffect, useState } from "react";
import { getPopularMovies } from "@/lib/api";
import { CardMovie } from "../carouselMovie/CardMovie";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { FaArrowLeft } from "react-icons/fa6";

export default function GridMovies() {
    const [movies, setMovies] = useState([]); // Estado inicial vacío

    const fetchMovies = async () => {
        try {
            const popularMovies = await getPopularMovies(); // Llama a la API
            setMovies(popularMovies); // Actualiza el estado con las películas
        } catch (error) {
            console.error("Error al obtener las películas populares:", error);
        }
    };

    // Llama a fetchMovies una vez cuando el componente se monta
    useEffect(() => {
        fetchMovies();
    }, []);

    // Se ejecuta cuando cambia el valor de `movies`
    return (
        <div className="p-10">
            <Link
                href={'/'}
                className="flex items-center pt-10 px-10 space-x-4 text-center sm:text-left">
                <Button color="danger" variant="ghost"
        
        > <FaArrowLeft /> </Button>

            </Link>
            <div
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 whitespace-nowrap 
                    overflow-x-scroll no-scrollbar md:gap-9 justify-items-center"
            >
                {movies.map(
                    (movie: {
                        id: string;
                        original_title: string;
                        overview: string;
                        vote_average: number;
                        release_date: string;
                        poster_path: string
                    }) => (
                        <CardMovie key={movie.id} movie={movie} />
                    )
                )}
            </div>
        </div>
    );
}
