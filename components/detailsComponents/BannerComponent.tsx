"use client";

import Image from "next/image";

interface BannerComponentProps {
    poster_path: string;
    title: string
    vote_average: number
    release_date: string
    overview: string
    genres: string[]
}

const BannerComponent = ({ poster_path, title, vote_average, release_date, genres, overview }: BannerComponentProps) => {

    return (

        <div className="flex justify-center items-center relative ">
            <div className="backdrop-blur-md bg-white/1 absolute h-[800px] w-screen"></div>
            <Image
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                width={9000}
                height={9000}
                quality={100}
                priority
                className="max-w-full h-[800px]"
                alt="Imagen de la película"
                style={{ objectFit: "cover" }}

            />

            <div className="text-white absolute w-[80%] sm:w-[70%] md:w-[50%]">
                <div className="text-center text-3xl font-bold">
                    <span>{title.substring(0, title.length / 2)}</span>
                    <span className="text-[#F26457]">{title.substring(title.length / 2)}</span>

                </div>

                <div className=" flex justify-center items-center py-2">
                    <span className="text-white text-md text-justify">{overview}</span>


                </div>
                <div className="text-center py-4 text-md text-white">
                    {release_date} / {genres.map((genre) => genre.name).join(', ')} </div>

                <div className="flex justify-center space-x-2">
                    <span className="text-white text-lg font-medium ">{vote_average}</span>
                    <Image
                        src={'/IMDb.webp'}
                        width={500}
                        height={500}
                        className="w-10"
                        alt="IMDB logo"
                    />
                </div>

            </div>




            <div></div>



        </div>

    )
};

export default BannerComponent;
