import { api } from "./api";

const getProducts = async () => {
    try {
        const resp = await api.get('/products')
        const data = resp.data;
        console.log(data)

    } catch (error) {
        if (error.response) {
            // The request was made, but the server responded with an error status code
            console.error('Response error:', error.response.data);
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Request error:', error.request);
        } else {
            // Something happened in setting up the request that triggered the error
            console.error('Error:', error.message);
        }

        throw new Error('Failed to fetch products');
    }
}

export default getProducts;