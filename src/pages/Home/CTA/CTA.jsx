import React from 'react';
import macBook from '../../../assets/macbook-dev.png';
import laptop from '../../../assets/laptop.png'

const CTA = () => {
    return (
        <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 '>
            <div className='bg-neutral text-neutral-content flex items-center justify-around rounded-3xl'>
                <div className='text-center'>
                    <h3 className='text-2xl font-bold'>Shop MacBooks</h3>
                    <p className='text-secondary'>as low as</p>
                    <span className='text-primary text-7xl font-extrabold'>$80</span>
                </div>
                <div className='flex flex-col pb-10'>
                    <img className='-mt-10' src={macBook} alt="" />
                    <button className='btn btn-accent mt-5'>Shop</button>
                </div>
            </div>
            <div className='bg-neutral text-neutral-content flex items-center justify-around rounded-3xl'>
                <div className='text-center'>
                    <h3 className='text-2xl font-bold'>Shop PC Laptops</h3>
                    <p className='text-secondary'>as low as</p>
                    <span className='text-primary text-7xl font-extrabold'>$50</span>
                </div>
                <div className='flex flex-col pb-10'>
                    <img className='-mt-10' src={laptop} alt="" />
                    <button className='btn btn-accent mt-5'>Shop</button>
                </div>
            </div>
        </div>
    );
};

export default CTA;