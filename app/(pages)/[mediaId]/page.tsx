'use client'

import BannerComponent from "@/components/detailsComponents/BannerComponent";
import { movieById } from "@/lib/api"
import { useEffect, useState } from "react"

const Details = ({ params }: { params: { mediaId: string } }) => {

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const data = await movieById(params.mediaId);
                setMovieData(data);
            } catch (error) {
                console.error('Error al obtener los datos de la película:', error);
            }
        };

        fetchMovieData();
    }, [params.mediaId]);
    console.log(movieData)

    return (

        movieData ? <BannerComponent /> : <h1 className="text-white">Cargando...</h1>
    )
}

export default Details