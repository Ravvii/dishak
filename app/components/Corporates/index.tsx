import Image from 'next/image';
import Link from 'next/link';

const Corporates = () => {

    return (
        <div className="mx-auto max-w-7xl pt-10 sm:pb-24 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    {/* <h2 className="text-midnightblue text-2xl font-semibold">Trusted by companies of all sizes</h2> */}
                    <h2 className='text-midnightblue text-2xl font-semibold' style={{ "textAlign": "initial" }}>Struggling to find skilled talent? </h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Content missing...</h3>
                    <Link href={'/'} className="text-midorange text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                        Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link>
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:pl-24 lg:mt-0'>
                    <Image src="/assets/business/Corporate-Training.png" alt="corporates" width={1000} height={805} />
                </div>

            </div>
        </div>
    )
}

export default Corporates;
