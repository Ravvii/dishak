import Image from 'next/image';
import Link from 'next/link';

const People = () => {

    return (
        <div className="mx-auto max-w-7xl pt-10 sm:pb-10 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    {/* <h2 className="text-midnightblue text-2xl font-semibold">Trusted by companies of all sizes</h2> */}
                    <h2 className='text-midnightblue text-2xl font-semibold' style={{ "textAlign": "initial" }}>Seeking rapid, resource-efficient product development ?</h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>We're your product development partner, offering end-to-end design, development, deployment, and testing solutions.</h3>
                    <Link href={'/'} className="text-midorange text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                        Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link>
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:pl-24 lg:mt-0'>
                    <Image src="/assets/people/Product-development.png" alt="business" width={1000} height={805} />
                </div>

            </div>
        </div>
    )
}

export default People;
