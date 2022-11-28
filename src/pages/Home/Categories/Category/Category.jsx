import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, _id, icon } = category
    return (
        <Link to={`/category/${_id}`}>
            <div className='mx-auto flex flex-col items-center'>
                <div>
                    <div className="w-24 rounded-full">
                        <img className=' ' src={icon} alt='' />
                    </div>
                </div>
                <p className='mt-3 font-bold'>{name}</p>
            </div>
        </Link>
    );
};

export default Category;