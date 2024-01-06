import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
    <div className='w-full flex flex-col items-center py-8'>
        <h1 className='text-2xl font-medium'>Welocme to the Redux Toolkit Store</h1>
        <div className='pt-2'>
          <h1 className='text-xl font-bold text-center py-8' >Products</h1>
            <Products/>
        </div>
    </div>
    </>
  )
}

export default Home
