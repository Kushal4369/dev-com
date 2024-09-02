import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";



const Navbar = () => {

    const navbarRef = useRef();
    const [menuState, setMenuState] = useState('hidden');

    const menu = () => {
        
        if (menuState === 'visible') {
            setMenuState('hidden')
        }
        else {
            setMenuState("visible")
        }
    }



    return (<>
        <div className='w-full h-14 bg-black text-white flex items-center '>

            <Image src={'/Logo.jpg'} alt='Logo' quality={100} height={100} width={100}
                style={{
                    width: '56px',
                    height: '56px',
                    position: 'absolute'

                }}></Image>
            <div className='flex flex-col w-full items-center'>

                <button  id='nav'
                    className='text-white text-center text-xl mt-64 sm:hidden flex items-center gap-3 '
                    onClick={menu}>
                    Menu{(menuState=='hidden')?<FiMenu />: <IoMdCloseCircleOutline/>}
                </button>

                <ul
                    className={`flex-col ${(menuState=='hidden')?'invisible': ''} flex z-10 w-full bg-black  text-sm  gap-8 items-center justify-center py-4 px-12 sm:visible sm:flex-row`}
                    ref={navbarRef}>
                    <li className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2'><Link href={'/'}>Home</Link></li>
                    <li className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2'><Link href={'/laptops'}>Laptops</Link></li>
                    <li className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2'><Link href={'/smartphones'}>Smartphones</Link></li>
                    <li className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2'><Link href={'/headphones'}>Headphones</Link></li>
                    <li className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2'><Link href={'/bags'}>Bags</Link></li>
                </ul>

            </div>

            <MdShoppingCart className='absolute right-2 top-2 text-3xl' />
        </div>



    </>


    );
}

export default Navbar