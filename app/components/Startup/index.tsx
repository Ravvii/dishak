import Image from 'next/image';
import Link from 'next/link';

const Startup = () => {

    return (
        <div className="mx-auto max-w-7xl pt-10 sm:pb-24 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-midnightblue text-2xl font-semibold' style={{ "textAlign": "initial" }}>Stuck with your startup launch ?</h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>We've got you covered! <br/>From inception to product development and long-term sustainability, we'll guide you every step of the way.</h3>
                    <Link href={'/'} className="text-midorange text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                        Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link>
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:pl-24 lg:mt-0'>
                    <Image src="/assets/business/Startup-acceleration.png" alt="startup" width={1000} height={805} />
                </div>

            </div>
        </div>
    )
}

export default Startup;
