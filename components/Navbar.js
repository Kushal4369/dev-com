import React, { useRef, useState } from 'react'
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
    const showCart= ()=> {
        const cart = document.getElementById('cart')
        cart.classList.remove('translate-x-96')

    }


    return (<>
        <div className='w-full h-14 bg-black text-white flex items-center '>

            <Image src={'/Logo.jpg'} alt='Logo' quality={100} height={100} width={100}
                style={{
                    width: '56px',
                    height: '56px',
                    position: 'absolute',
                    zIndex:20

                }}></Image>
            <div className='flex flex-col w-full items-center'>

                <button  id='nav'
                    className='text-white text-center text-xl sm:hidden flex items-center gap-3 '
                    onClick={menu}>
                    Menu{(menuState=='hidden')?<FiMenu />: <IoMdCloseCircleOutline/>}
                </button>

                <ul
                    className={`flex-col ${(menuState=='hidden')?'invisible': ''} flex  w-full bg-black  text-sm  gap-6 items-center justify-center px-12 py-3 absolute top-[56px] sm:visible sm:flex-row sm:static`}
                    ref={navbarRef}>
                    <li><Link  className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2 ' href={'/'}>Home</Link></li>
                    <li><Link className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2 ' href={'/laptops'}>Laptops</Link></li>
                    <li><Link className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2 ' href={'/smartphones'}>Smartphones</Link></li>
                    <li><Link className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2 ' href={'/headphones'}>Headphones</Link></li>
                    <li><Link className='hover:text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2 ' href={'/bags'}>Bags</Link></li>
                </ul>

            </div>

            <MdShoppingCart className='absolute right-2 top-2 text-3xl' onClick={showCart} />
        </div>



    </>


    );
}

export default Navbar