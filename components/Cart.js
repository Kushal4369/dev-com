import React from 'react'
import CartItem from './CartItem'
import { IoCloseCircleSharp } from "react-icons/io5";


const Cart = () => {
    
    const hideCart= ()=> {
        const cart =document.getElementById('cart')
        
        cart.classList.add('translate-x-96')
    }

        
    
    return (<>
        <div className='flex flex-col gap-3 fixed right-0 top-0 h-[100vh] w-96 bg-white p-5 translate-x-96 transition delay-75' id='cart'>
            <div className='flex justify-between text-2xl items-center'>
                <h1 className='text-black  my-3 '> Shopping Cart</h1>
                <IoCloseCircleSharp onClick={hideCart} />
            </div>



            <div className='flex gap-8 flex-col'>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

            </div>
            <button 
            className="flex mx-auto  text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">
                Checkout
                </button>
        </div>
    </>
    )
}

export default Cart