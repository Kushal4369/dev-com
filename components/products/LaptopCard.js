import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const LaptopCard = () => {
    return (
        <>
            <div className="w-[18rem] sm:w-[20rem] h-[30rem] shadow-xl shadow-gray-800">
                <Link href={''} className="block relative h-[16rem] rounded overflow-hidden">
                    <Image alt="ecommerce" className="w-full h-full block" src="/laptop1.jpg" height={260} width={420} />
                </Link>
                <div className="text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY:<span className='text-gray-900 text-sm font-medium'>Laptops</span></h3>
                    <h2 className=""></h2>
                    <p className="mt-1">₹50000</p>
                    <Link href={''} className='text-sm overflow-hidden'>HP Laptop 15s, 12th Gen Intel Core i3, 15.6-inch (39.6 cm), 8GB DDR4, 512GB SSD, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq5007TU / FQ5327TU</Link>
                    <div className='flex gap-2 text-sm m-2'>
                        <button className="flex mx-auto  text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">Add to Cart</button>
                        <button className="flex mx-auto  text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">Buy Now</button>

                     </div>
                </div>
            </div>
        </>
    )
}

export default LaptopCard