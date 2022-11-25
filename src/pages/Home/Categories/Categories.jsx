import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category/Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    // const getData = async () => {
    //     const result = await axios.get('../../../../public/data/category.json');
    //     console.log(result)
    //     return result
    // }

    useEffect(() => {

        fetch("data/category.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h5 className='text-primary font-bold text-xl mt-10 mb-5'>Shop by Category</h5>
                <Link className='link link-accent' to='/categories'>See All</Link>
            </div>
            <div className='grid grid-cols-4 mx-auto'>
                {categories.map(category => <Category key={category._id} category={category}></Category>)}
            </div>
        </div>
    );
};

export default Categories;