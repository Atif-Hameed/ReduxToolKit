import React, { useEffect, useState } from 'react'
import getProducts from '../services/products';

const Products = () => {

    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const data = await getProducts();
            console.log(data)
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <div>
            Products
        </div>
    )
}

export default Products
