import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const SmartphoneCard = () => {
  return (
    <>
      <div className="w-[21rem] sm:w-[22rem] h-[30rem] shadow-xl shadow-gray-800">
        <Link href={''}>
          <Image src={'/iphone.webp'} height={300} width={300} alt='Iphone'
            className='mx-auto'
          />
          <p className='overflow-hidden px-4 h-20 text-sm'>Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Mediatek Helio G85 | 90Hz Display | 50MP AI Triple Camera</p>
          <h3 className="text-gray-500 text-xs text-center tracking-widest title-font mb-1">CATEGORY:<span className='text-gray-900 text-sm font-medium'>Smartphones</span></h3>
          <p className="mt-1 text-center">₹50000</p>


            <div className='flex gap-2 text-sm m-2 items-center'>
              <button className="flex mx-auto  text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">Add to Cart</button>
              <button className="flex mx-auto  text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">Buy Now</button>

          </div>
        </Link>

      </div>
    </>
  )
}

export default SmartphoneCard