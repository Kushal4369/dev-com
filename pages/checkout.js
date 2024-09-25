import React from 'react'
import CartItem from '@/components/CartItem'

const checkout = () => {
    return (
        <>
        <h1 className='text-gray-800 text-center font-semibold text-3xl m-3'>Checkout</h1>
        
        <div className='flex flex-col lg:flex-row items-center'>
            <div className='w-full lg:w-3/5' >
                <form className=' mx-3 w-full flex flex-wrap gap-3 justify-left'>
                    <label className="form-control w-full max-w-64 ">
                        <div className="label">
                            <span className="label-text">First Name</span>
                        </div>
                        <input type="text" placeholder="First Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full max-w-64 ">
                        <div className="label">
                            <span className="label-text">Last Name</span>
                        </div>
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full max-w-64">
                        <div className="label">
                            <span className="label-text">Your email</span>
                        </div>
                        <input type="text" placeholder="Email" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full max-w-64">
                        <div className="label">
                            <span className="label-text">Your phone</span>
                        </div>
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full max-w-md">
                        <div className="label">
                            <span className="label-text"> Address Line 1</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full max-w-md">
                        <div className="label">
                            <span className="label-text"> Address Line 2</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full max-w-64">
                        <div className="label">
                            <span className="label-text"> Pincode</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full max-w-64">
                        <div className="label">
                            <span className="label-text"> City</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full max-w-md">
                        <div className="label">
                            <span className="label-text">State</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                </form>
            </div>
            <div className='flex flex-col gap-3 bg-white p-5 w-4/5 lg:w-2/5 '>

                <h1 className='text-black text-xl text-center my-3 font-bold '> Order Summary</h1>

                <div className='flex gap-8 flex-col'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />

                </div>
                <p className='text-center font-semibold'>Total: 5000</p>
            </div>
        </div>
        <button className="flex mx-auto mt-4 text-white bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded ">Continue</button>

        </>
    )
}

export default checkout