import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, _id, icon } = category
    return (
        <Link to={`/category/${_id}`}>
            <div className='mx-auto flex flex-col items-center'>
                <div className="avatar">
                    <div className="w-28 rounded-full">
                        <img src={icon} alt='' />
                    </div>
                </div>
                <p className='mt-2 font-bold'>{name}</p>
            </div>
        </Link>
    );
};

export default Category;