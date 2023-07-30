"use client"
import Image from "next/image";
import React from "react";
import { Tabs } from "./tab";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/carousel/Product-Development.png"
    },
    {
        imgSrc: "/assets/carousel/Startup.png"
    },
    {
        imgSrc: "/assets/carousel/educational-institution.png"
    },
    {
        imgSrc: "/assets/carousel/tech-aspirant.png"
    },
    {
        imgSrc: "/assets/carousel/Corporates.png"
    }
];

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
};


// CAROUSEL SETTINGS
const Companies = () => {
    return (
        <div className='text-center my-20'>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Who Needs Dishak?</h3>
                {/* <h2 className="text-midnightblue text-2xl font-semibold">Who Needs Dishak?</h2> */}
                <div className="py-14">
                    {/* <Slider {...settings}>
                        {data.map((item, i) =>
                            <div key={i}>
                                <Image src={item.imgSrc} alt={item.imgSrc} width={116} height={36} />
                            </div>
                        )}
                    </Slider> */}
                    <Tabs></Tabs>
                </div>
            </div>
        </div>

    )
}

export default Companies;