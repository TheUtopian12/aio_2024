'use client'
import BannerComponent from "@/components/detailsComponents/BannerComponent";
import { movieById } from "@/lib/api"
import { useEffect, useState } from "react"

interface PropsMovie {
    title: string; poster_path: string; vote_average: number; release_date: string; overview: string; genres: string[];
}
const Details = ({ params }: { params: { mediaId: string } }) => {

    const [movieData, setMovieData] = useState<PropsMovie | undefined>();

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
    }, []);
    return (
        movieData ? <BannerComponent
            poster_path={movieData.poster_path}
            title={movieData.title}
            vote_average={movieData.vote_average}
            release_date={movieData.release_date}
            overview={movieData.overview}
            genres={movieData.genres}
        /> : <h1 className="text-white">Cargando...</h1>
    );
}

export default Details;
