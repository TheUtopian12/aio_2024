"use client";

import { useEffect, useState } from "react";
import { getPopularMovies } from "@/lib/api";
import { CardMovie } from "../carouselMovie/CardMovie";
import Link from "next/link";

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

    // Nuevo useEffect para observar los cambios en `movies`
    useEffect(() => {
        console.log("Películas actualizadas:", movies);
    }, [movies]); // Se ejecuta cuando cambia el valor de `movies`
    return (
        <div className="p-10">
            <Link
                href={'/'}
                className="flex items-center pt-10 px-10 space-x-4 text-center sm:text-left">
                <span className="text-white">⬅️</span>
                <h1 className="text-xl text-white">Home Page  </h1>

            </Link>
            <div
                className="grid grid-cols-6 whitespace-nowrap 
                    overflow-x-scroll no-scrollbar gap-9"
            >
                {movies.map(
                    (movie: {
                        id: string;
                        original_title: string;
                        overview: string;
                        vote_average: number;
                        release_date: string;
                    }) => (
                        <CardMovie key={movie.id} movie={movie} />
                    )
                )}
            </div>
        </div>
    );
}