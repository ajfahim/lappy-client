import React from 'react';
import Advertise from './Advertise/Advertise';
import Categories from './Categories/Categories';
import Hero from './Hero/Hero';
import Hero2 from './Hero2/Hero2';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto mt-5'>
            <Hero></Hero>
            <Categories></Categories>
            <Advertise></Advertise>

        </div>
    );
};

export default Home;