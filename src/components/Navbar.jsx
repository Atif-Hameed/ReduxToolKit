import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-evenly'>
                <span>Redux Store</span>
                <div className='flex gap-3'>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/cart'>
                        Cart
                    </Link>
                    <div className='text-xl font-bold'>Cart items : 0</div>
                </div>
            </div>
        </>
    )
}

export default Navbar
