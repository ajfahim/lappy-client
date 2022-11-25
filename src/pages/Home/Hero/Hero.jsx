import React from 'react';
import logo from '../../../assets/hero.png'

const Hero = () => {
    return (
        <div className="hero min-h-[50vh] rounded-2xl" style={{ backgroundImage: `url(${logo})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-2 text-5xl font-bold text-secondary">Best deals</h1>
                    <p className="mb-5 text-xl text-accent">on Pre-Owned Laptops</p>
                    <button className="btn btn-primary">See all Listing</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;