import React, { useEffect, useState } from 'react'
import getProducts from '../services/products';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {

    const dispatch = useDispatch()
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {

            const data = await getProducts();
            // console.log(data)
            setProducts(data);
            console.log("products : ",products)

        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    const handleAdd = (product) => {
        dispatch( add(product) )
    }

    return (
        <>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 px-8 gap-8'>
                {products.map( Product => (
                    <div className='flex flex-col bg-white gap-3 rounded-lg justify-center items-center p-6' key={Product.id} >
                        <img src={Product.images[1]} className='h-28' alt="" />
                        <div className='text-center font-medium'>{Product.description}</div>
                        <div className='font-bold text-xl'>{Product.price}</div>
                        <button
                        onClick={() => handleAdd(Product)} 
                        className='p-1 px-2 text-white bg-purple-600 rounded-lg'>Add to cart</button>
                    </div>
                ) )}
            </div>
        </>
    )
}

export default Products
