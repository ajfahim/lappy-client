import React from 'react';
import logo from '../../../assets/hero.png'

const Hero = () => {
    return (
        <div className="hero min-h-[50vh] rounded-3xl" style={{ backgroundImage: `url(${logo})`, objectFit: "cover" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-2 text-5xl font-bold text-accent">Best deals</h1>
                    <p className="mb-5 text-xl text-white">on Pre-Owned Laptops</p>
                    <button className="btn btn-neutral">Browse all Laptops</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;