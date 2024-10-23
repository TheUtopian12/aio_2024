"use client";

import { useEffect, useState } from "react";
import { getPopularMovies } from "@/lib/api";
import { CardMovie } from "./CardMovie";

export default function MovieList() {
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
        <div
            className="flex whitespace-nowrap 
                    overflow-x-scroll no-scrollbar gap-9"
        >
            {movies.slice(0, 10).map(
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
    );
}
