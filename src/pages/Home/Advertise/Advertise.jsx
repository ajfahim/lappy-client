import React from 'react';
import { Link } from 'react-router-dom';

const Advertise = () => {
    return (

        <div>
            <div className='flex justify-between items-center'>
                <h5 className='text-primary font-bold text-xl mt-10 mb-5'>Featured/Advertised</h5>
                <Link className='link link-accent' to='/advertised'>See All</Link>
            </div>
        </div>

    );
};

export default Advertise;