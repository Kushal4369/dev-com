import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeadphonesCard = () => {
    return (
        <>
            <div className="w-[21rem] sm:w-[22rem] h-[30rem] shadow-xl shadow-gray-800">
                <Link href={''}>
                    <Image src={'/zebronics_headphones.jpg'} height={300} width={200} alt='Iphone'
                        className='m-auto relative top-2'
                    />
                    <div className='flex flex-col relative top-1'>
                        <p className='overflow-hidden px-4 h-16 text-sm'>ZEBRONICS Zeb-Thunder PRO On-Ear Wireless Headphone Up to 60 Hours Playback, Wired Mode, USB-C Type Charging(Black)</p>
                        <h3 className="text-gray-500 text-xs text-center tracking-widest title-font mb-1 ">CATEGORY:<span className='text-gray-900 text-sm font-medium'>Headphones</span></h3>
                        <p className="mt-1 text-center relative top-0">₹999</p>


                        <div className='flex gap-2 text-sm m-2 items-center'>
                            <button className="flex mx-auto  text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">Add to Cart</button>
                            <button className="flex mx-auto  text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">Buy Now</button>

                        </div>
                    </div>

                </Link>

            </div>
        </>
    )
}

export default HeadphonesCard