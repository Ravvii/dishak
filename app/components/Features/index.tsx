import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Features = () => {
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">How Do We Help You?</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">DISHAK’s experienced team of professionals is here to accelerate your success <br /> with three of our major service verticals as listed below.</h5>
                <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                    <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                        <div className='col-span-6 flex flex-col justify-center'>
                            <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Product Engineering Services</h1>
                            <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>
                                Transform your innovative idea into a real-world product encompassing service from architecture to design to development and testing including various compliances and pre-compliances.</h3>
                            <Link href={'/'} className="text-midorange text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                                Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link>
                        </div>

                        <div className='col-span-6 flex justify-center mt-10 lg:pl-24 lg:mt-0'>
                            <Image src="/assets/people/Product-Engineering.png" alt="business" width={1000} height={805} />
                        </div>

                    </div>
                    <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                            <div className='col-span-6 flex justify-center'>
                                <Image src="/assets/payment/Startupacceleration.png" alt="payment" width={600} height={600} />
                            </div>

                            <div className='col-span-6 flex flex-col justify-center lg:pl-24 lg:mt-0'>
                                <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Startup Acceleration Services</h2>
                                <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Equip you with the holistic roadmap of building a startup with the right technical expertise, regulatory support and developing and launching the product.</h3>
                                <Link href={'/'} className="text-midorange text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                                    Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                        <div className='col-span-6 flex flex-col justify-center'>
                            <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Career Enhancement & Placement Support</h1>
                            <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>
                            We elevate your team's skills for career growth and organizational success with our comprehensive corporate training that equips them with technical expertise and essential career skills.</h3>
                            <Link href={'/'} className="text-midorange text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                                Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link>
                        </div>

                        <div className='col-span-6 flex justify-center mt-10 lg:pl-24 lg:mt-0'>
                            <Image src="/assets/people/PlacementTraining.png" alt="business" width={1000} height={805} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
