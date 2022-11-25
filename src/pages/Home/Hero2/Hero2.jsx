import React from 'react';
import searchBoy from '../../../assets/search-boy.png';
import searchLeft from '../../../assets/search-left.png';

const Hero2 = () => {
    return (
        <div className='bg-purple-600 min-h-[50vh] my-10 rounded-3xl relative'>
            <img className='absolute bottom-0 -right-[100px] max-w-xs md:max-w-sm lg:max-w-full h-auto' src={searchBoy} alt="" srcset="" />
            <div className='absolute top-1/2 left-1/2'>
                <h1>Best deals</h1>
                <h3>on Pre-Owned Laptops</h3>
            </div>
            <img className='absolute bottom-0 -left-[100px] max-w-xs md:max-w-sm lg:max-w-full h-auto' src={searchLeft} alt="" srcset="" />
        </div>
    );
};

export default Hero2;