"use client"
import Image from 'next/image';
import React, { useState } from "react";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

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

const data1: string[] = [
    "/assets/carousel/Product-Development.png",
    "/assets/carousel/Product-Development.png",
    "/assets/carousel/Product-Development.png"
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

const Banner = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    return (
        <div className='bg-header'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12'>


                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        <Image src="/assets/banner/favicon.ico" alt="star-image" width={95} height={97} className='absolute top-[-74px] right-[51px]' />
                        <Image src="/assets/banner/lineone.svg" alt="line-image" width={190} height={148} className='absolute top-[-74px] right-[51px]' />
                        <h1 className='text-midnightblue text-4xl md:text-85xl goalSize text-center lg:text-start font-semibold lh-133 pt-5'>Driving Innovation, Empowering Success.</h1>
                        <h3 className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'>
                            DISHAK's Engineering and Training team manifests your vision into concrete solutions.
                        </h3>
                        <div className='pt-8 mx-auto lg:mx-0'>
                            <button className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-midorange hover:text-white hover:bg-amber">
                                Explore Our Services
                            </button>
                        </div>
                    </div>

                    <div className='col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0'>
                        Test
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Banner;
