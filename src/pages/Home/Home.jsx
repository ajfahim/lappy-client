import React from 'react';
import Advertise from './Advertise/Advertise';
import Categories from './Categories/Categories';
import CTA from './CTA/CTA';
import Hero from './Hero/Hero';


const Home = () => {
    return (
        <div className='w-4/5 mx-auto mt-5'>
            <Hero></Hero>
            <CTA></CTA>
            <Categories></Categories>
            <Advertise></Advertise>


        </div>
    );
};

export default Home;