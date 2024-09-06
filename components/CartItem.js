import React from 'react'
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

const CartItem = () => {
  return (
    <div className='flex justify-center'>
        <p> Laptop - HP Laptop i3 12th gen 8 Gb ram ...</p>
        <div className='flex justify-center items-center gap-3'>
            <FaCircleMinus />
            <p>1</p>
            <FaCirclePlus />
        </div>
        

    </div>
  )
}

export default CartItem