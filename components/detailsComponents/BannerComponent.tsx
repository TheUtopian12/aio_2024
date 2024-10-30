"use client";

import Image from "next/image";
import "./BannerMovieStyles.css";
import { useState } from "react";
import { Button } from "@nextui-org/react";

interface BannerComponentProps {
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    overview: string;
    genres: Genres[];
}
interface Genres {
    name: string
}

const BannerComponent = ({
    poster_path,
    title,
    vote_average,
    release_date,
    genres,
    overview,
}: BannerComponentProps) => {
    const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción

    const handlePlayClick = () => {
        setIsPlaying(true); // Cambiar el estado a verdadero al hacer clic
    };
    return (
        <div className="flex justify-center items-center relative ">
            <div className="backdrop-blur-md bg-white/1 absolute h-[800px] w-screen"></div>
            <Image
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                width={9000}
                height={9000}
                quality={100}
                priority
                className="max-w-full h-[800px] opacity-40"
                alt="Imagen de la película"
                style={{ objectFit: "cover" }}
            />

            <div className="text-white absolute w-[80%] sm:w-[70%] md:w-[50%]">
                <div className="text-center text-3xl font-bold">
                    <span>{title.substring(0, title.length / 2)}</span>
                    <span className="text-[#F26457]">
                        {title.substring(title.length / 2)}
                    </span>
                </div>

                <div className=" flex justify-center items-center py-2">
                    <span className="text-white text-md text-justify">{overview}</span>
                </div>
                <div className="text-center py-4 text-md text-white">
                    {release_date} / {genres.map((genre) => genre.name).join(", ")}{" "}
                </div>

                <div className="flex justify-center space-x-2">
                    <span className="text-white text-lg font-medium ">
                        {vote_average}
                    </span>
                    <Image
                        src={"/IMDb.webp"}
                        width={500}
                        height={500}
                        className="w-10"
                        alt="IMDB logo"
                    />
                </div>
                <div className="flex justify-center items-center my-10">
                    <button className="button-with-icon" onClick={handlePlayClick}>
                        <svg
                            className="icon"
                            id="Play"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="color000000 svgShape"
                                fill="#000000FF"
                                d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
                            ></path>
                        </svg>
                        <span className="text text-black">Play</span>
                    </button>
                </div>


            </div>
            {isPlaying && ( // Mostrar el video si isPlaying es verdadero
                <div className="absolute flex justify-center items-center w-full h-full">

                    <Button
                        size="md"
                        variant="bordered"
                        onClick={() => setIsPlaying(false)}
                        color="danger" className="absolute top-4 right-4 font-extrabold">X</Button>

                    <iframe
                        width="80%"
                        height="80%"
                        src="https://www.youtube.com/embed/HyIyd9joTTc" // Cambiar a la URL del video de YouTube
                        title="Video de YouTube"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default BannerComponent;
