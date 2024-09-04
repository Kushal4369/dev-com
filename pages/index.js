import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Image src={'/background.jpg'} alt="background" height={800} width={1000} className="z-0" />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Explore modern gadgets now</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Explore a wide range of tech products.</p>
        </div>
      </div>
      </div>

      );
}
