import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/shared/Loading/Loading';
import ProductCard from '../../../components/shared/ProductCard/ProductCard';

const getAdvertisedProducts = async () => {
    const res = await axios.get("http://localhost:5000/advertised")
    return res.data;
}

const Advertise = () => {
    const { data: products, isLoading, error: advertiseError } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: getAdvertisedProducts
    })
    console.log("error: ", advertiseError)

    if (advertiseError) {
        return <h2 className="text-xl">{advertiseError.message}</h2>
    }


    return (

        <div>
            <div className='flex justify-between items-center'>
                <h5 className='text-primary font-bold text-3xl mt-10 mb-5'>Featured/Advertised</h5>
                <Link className='link link-accent' to='/advertised'>See All</Link>
            </div>
            {
                isLoading ?
                    <Loading></Loading>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center '>
                        {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>).slice(0, 3)}
                    </div>

            }
        </div>

    );
};

export default Advertise;