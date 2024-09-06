import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeadphonesCard = () => {
    return (
        <>
            <div className="w-[21rem] sm:w-[22rem] h-[31rem] shadow-xl shadow-gray-800 flex flex-col">
                <div className='h-[340px] w-[350px] mx-auto'>
                    <Link href={''} className='m-auto relative top-8'>
                        <Image src={'/sony_headphones.jpg'} height={200} width={200} alt='headphones'
                        className='mx-auto'/>
                    </Link>

                </div>
                <div>
                    <p className='overflow-hidden px-4 h-16 text-sm'>Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Mediatek Helio G85 | 90Hz Display | 50MP AI Triple Camera</p>
                    <h3 className="text-gray-500 text-xs text-center tracking-widest title-font mb-1">CATEGORY:<span className='text-gray-900 text-sm font-medium'>Smartphones</span></h3>
                    <p className="text-center">₹50000</p>
                </div>

                <div className='flex gap-2 text-sm  items-center'>
                    <button className="flex mx-auto  text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">Add to Cart</button>
                    <button className="flex mx-auto  text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">Buy Now</button>

                </div>
            </div>




        </>
    )
}

export default HeadphonesCard