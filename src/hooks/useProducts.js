import { useQuery } from 'react-query';
import { fetchProducts } from '../services/api';

export default function useProducts(limit = null) {
    return useQuery('products', async () => {
        const products = await fetchProducts();
        return limit ? products.slice(0, limit) : products;
    }, {
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 60 * 60 * 1000, // 1 hour
    })
}