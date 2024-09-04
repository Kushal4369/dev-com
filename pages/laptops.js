import LaptopCard from '@/components/products/LaptopCard'
import React from 'react'

const laptops = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Laptops</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Select among a wide range of latest laptops.</p>
        </div>
        <div className="flex flex-wrap gap-5 px-5 justify-center">

          <LaptopCard />
          <LaptopCard />
          <LaptopCard />
          <LaptopCard />
          <LaptopCard />
          <LaptopCard />
          <LaptopCard />
          <LaptopCard />
        </div>
      </div>
    </section>
  )
}

export default laptops