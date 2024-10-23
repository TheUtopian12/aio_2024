import Image from "next/image";
import React from "react";

const BannerMovie = () => {
    return (
        <div className="flex items-center justify-center">

            <Image
                src={"/poster/148558.webp"}
                width={500}
                height={500}
                className="w-[90%] h-[500px] py-2 rounded-xl"
                alt="Movie image"
                style={{ objectFit: "cover" }}
            />
        </div>
    );
};

export default BannerMovie;
