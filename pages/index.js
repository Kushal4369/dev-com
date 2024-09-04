import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Image src={'/background.jpg'} alt="background" height={800} width={1000} className="z-0" />
      
    </div>

  );
}
