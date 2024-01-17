import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {

  const products = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleAdd = (productId) => {
    dispatch( remove(productId) )
  }

  return (
    <div className='min-h-[100vh]'>
      <h1 className='text-3xl font-bold text-center py-3 pt-10' >Cart</h1>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 px-8 gap-8'>
        {products.map(Product => (
          <div className='flex flex-col bg-white gap-3 rounded-lg justify-center items-center p-6' key={Product.id} >
            <img src={Product.images[1]} className='h-28' alt="" />
            <div className='text-center font-medium'>{Product.description}</div>
            <div className='font-bold text-xl'>{Product.price}</div>
            <button
              onClick={() => handleAdd(Product.id)}
              className='p-1 px-2 text-white bg-purple-600 rounded-lg'>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
