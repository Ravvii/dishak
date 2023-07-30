import Link from "next/link";
import Image from "next/image";

interface links {
    link: string;
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'],
    },
    {
        id: 2,
        section: "Support",
        link: ['Help center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
    }
]

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'www.facebook.com',
        width: 10
    },
    {
        imgSrc: '/assets/footer/instagram.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/twitter.svg',
        link: 'www.twitter.com',
        width: 14
    },

]

const links: links[] = [
    {
        link: 'Product',
    },
    {
        link: 'Pricing',
    },
    {
        link: 'Features',
    },

]



const footer = () => {
    return (

        <div className=" bg-midnightblue">

            <div className="mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">



                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <img src="/assets/footer/favicon.ico" alt="logo" className='pb-4 w-60px' />
                        <h3 className='text-white text-lg font-medium leading-9 mb-4 lg:mb-20'> DISHAK Technologies Pvt Ltd <br /></h3>
                        <div className='flex gap-4'>
                        {socialLinks.map((items, i) => (
                                <Link href={items.link} key={i}>
                                    <div className="socialBg h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-white">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-semibold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <h4 className="opacity-60 text-lg font-normal text-white">
                                        <Link href="/" className="text-offwhite text-sm font-normal mb-6 space-links">{link}</Link>
                                        </h4>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}

                    <div className='col-span-4'>
                    </div>

                </div>
            </div>


        </div >
    )
}

export default footer;
