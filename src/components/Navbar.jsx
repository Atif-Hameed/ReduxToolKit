import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex items-center flex-wrap md:px-16 px-4'>
                <div className='md:w-[35%] text-4xl font-bold'>Redux Store</div>
                <div className='md:w-[65%] flex items-center justify-between'>
                    <div className='flex md:w-1/2 justify-evenly gap-3 items-center'>
                        <Link to='/' className='text-xl font-medium text-blue-800'>
                            Home
                        </Link>
                        <Link to='/cart' className='text-xl font-medium text-blue-800'>
                            Cart
                        </Link>
                    </div>
                    <div className='text-xl font-bold text-green-700'>Cart items : <span className='text-black' >0</span></div>
                </div>
            </div>
        </>
    )
}

export default Navbar
