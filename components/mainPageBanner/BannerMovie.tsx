import Image from "next/image";
import React from "react";
import "./BannerMovieStyles.css"
const BannerMovie = () => {
    return (
        <div className="flex relative items-center justify-center">

            <Image
                src={"/poster/1318286.jpeg"}
                width={9000}
                height={9000}
                quality={100}
                className="w-[100%] h-[500px] "
                alt="Movie image"
                style={{ objectFit: "cover" }}
            />

            <div className="flex justify-center items-center absolute bottom-20 space-x-4">

                <button className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-500 hover:bg-orange-600">
                    <span className="text-xl text-white">+</span>
                </button>
                <button className="button-with-icon">
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

                <button className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-500 hover:bg-orange-600 ">
                    <span className="text-xl text-white">i</span>
                </button>

            </div>
        </div>
    );
};

export default BannerMovie;
