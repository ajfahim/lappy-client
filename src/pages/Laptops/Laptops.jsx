import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shared/ProductCard/ProductCard';

const Laptops = () => {

    const getLaptops = async () => {
        const res = await axios.get("https://lappy-server.vercel.app/products");
        console.log(res)
        return res.data
    }
    const { data: laptops } = useQuery({
        queryKey: ["laptops"],
        queryFn: getLaptops
    })
    console.log(laptops)
    return (
        <div className='w-4/5 mx-auto mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto'>
                {
                    laptops?.map(laptop => <ProductCard key={laptop._id} product={laptop}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Laptops;